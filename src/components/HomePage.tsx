import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Alert } from "../types/Alert";
import { fetchAlerts } from "../services/api";

import HeaderBar from "./Home/HeaderBar";
import FiltersBar from "./Home/FiltersBar";
import NoticesList from "./Home/NoticesList";
import SubscriptionBox from "./Home/SubscriptionBox";

const HomePage: React.FC = () => {
    const [alerts, setAlerts] = useState<Alert[]>([]);
    const [filteredList, setFilteredList] = useState<Alert[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBoroughs, setSelectedBoroughs] = useState<string[]>([]);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [boroughDropdownOpen, setBoroughDropdownOpen] = useState(false);
    const [topicDropdownOpen, setTopicDropdownOpen] = useState(false);
    const [dateError, setDateError] = useState("");

    useEffect(() => {
        fetchAlerts().then((data) => {
            const enriched = data.map((alert) => {
                const lowerName = alert.name.toLowerCase();

                const topicMatch = ["eau", "ébullition", "aqueduc", "travaux", "fermeture", "piscine", "urgence"].find(keyword =>
                    lowerName.includes(keyword)
                );
                const boroughMatch = ["plateau", "ville-marie", "mercier", "outremont", "hochelaga", "rosemont", "ahuntsic", "verdun", "lasalle"].find(keyword =>
                    lowerName.includes(keyword)
                );

                return {
                    ...alert,
                    topic: topicMatch ? topicMatch[0].toUpperCase() + topicMatch.slice(1) : "Autre",
                    borough: boroughMatch ? boroughMatch[0].toUpperCase() + boroughMatch.slice(1) : "Autre"
                };
            });

            setAlerts(enriched);
            setFilteredList(enriched);
        });
    }, []);

    const applyFilters = (
        search: string,
        boroughs: string[],
        topics: string[],
        from: string,
        to: string
    ) => {
        let filtered = alerts;

        if (search) {
            filtered = filtered.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (boroughs.length > 0) {
            filtered = filtered.filter((item) => {
                const values = item.borough.split(/[/,-]/).map((b) => b.trim());
                return values.some((v) => boroughs.includes(v));
            });
        }

        if (topics.length > 0) {
            filtered = filtered.filter((item) => {
                const values = item.topic.split(/[/,-]/).map((t) => t.trim());
                return values.some((v) => topics.includes(v));
            });
        }

        if (from && to) {
            const start = dayjs(from);
            const end = dayjs(to);

            if (start.isAfter(end)) {
                setDateError("Error!!: 'From' date is after 'To' date.");
                return;
            } else {
                setDateError("");
                filtered = filtered.filter((item) => {
                    const itemDate = dayjs(item.date);
                    return (
                        itemDate.isAfter(start.subtract(1, "day")) &&
                        itemDate.isBefore(end.add(1, "day"))
                    );
                });
            }
        }

        setFilteredList(filtered);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        applyFilters(value, selectedBoroughs, selectedTopics, startDate, endDate);
    };

    const toggleBorough = (borough: string) => {
        const updated = selectedBoroughs.includes(borough)
            ? selectedBoroughs.filter((b) => b !== borough)
            : [...selectedBoroughs, borough];
        setSelectedBoroughs(updated);
        applyFilters(searchQuery, updated, selectedTopics, startDate, endDate);
    };

    const toggleTopic = (topic: string) => {
        const updated = selectedTopics.includes(topic)
            ? selectedTopics.filter((t) => t !== topic)
            : [...selectedTopics, topic];
        setSelectedTopics(updated);
        applyFilters(searchQuery, selectedBoroughs, updated, startDate, endDate);
    };

    const handleDateChange = (from: string, to: string) => {
        setStartDate(from);
        setEndDate(to);
        applyFilters(searchQuery, selectedBoroughs, selectedTopics, from, to);
    };

    const resetFilters = () => {
        setSearchQuery("");
        setSelectedBoroughs([]);
        setSelectedTopics([]);
        setStartDate("");
        setEndDate("");
        setFilteredList(alerts);
    };

    const extractUnique = (field: keyof Alert): string[] => {
        const rawValues = alerts.flatMap(alert =>
            alert[field]
                .split(/[/,-]/)
                .map(val => val.trim())
        );
        return Array.from(new Set(rawValues)).filter(v => v && v !== "Non précisé" && v !== "Inconnu");
    };

    const allBoroughs = extractUnique("borough");
    const allTopics = extractUnique("topic");

    return (
        <>
            <HeaderBar searchQuery={searchQuery} onSearch={handleSearch} />
            <div className="flex flex-col max-w-screen-xl mx-auto px-4">
                <FiltersBar
                    allBoroughs={allBoroughs}
                    allTopics={allTopics}
                    selectedBoroughs={selectedBoroughs}
                    selectedTopics={selectedTopics}
                    boroughDropdownOpen={boroughDropdownOpen}
                    topicDropdownOpen={topicDropdownOpen}
                    toggleBoroughDropdown={() => setBoroughDropdownOpen(!boroughDropdownOpen)}
                    toggleTopicDropdown={() => setTopicDropdownOpen(!topicDropdownOpen)}
                    toggleBorough={toggleBorough}
                    toggleTopic={toggleTopic}
                    startDate={startDate}
                    endDate={endDate}
                    onDateChange={handleDateChange}
                    onReset={resetFilters}
                />
                <div className="flex flex-col md:flex-row gap-6 mt-1">
                    <NoticesList alerts={filteredList} dateError={dateError} />
                    <SubscriptionBox />
                </div>
            </div>
        </>
    );
};

export default HomePage;