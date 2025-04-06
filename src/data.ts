export type Nouvelle = {
    name: string,
    borough: string,
    date: string,
    text: string[],
    location: string,
};

export const nouvelleList: Nouvelle[] = [
    {
        name: "Special schedule for Complexe Aquatique Rosemont, Rosemont-La Petite-Patrie",
        borough: "Rosemont",
        date: "Published April 4, 2025 - 5:13 pm",
        text: ["• The Complexe Aquatique de Rosemont, located at 6150 9e Avenue, will be closed starting at 7:00 p.m. on 04/04/2025 and 04/05/2025.","• Reason: Event Jeux de Montréal","• The regular schedule will resume on 04/06/2025."],
        location: "6150 9e Avenue, Montréal, QC H1Y 2K4"
    },
    {
        name: "Water interruption notice – Plateau-Mont-Royal",
        date: "Published April 5, 2025 - 10:22 am",
        borough: "Plateau",
        text: [
            "• Water services will be temporarily suspended between 8:00 a.m. and 3:00 p.m. on 04/07/2025.",
            "• Affected streets include Rue Saint-Denis and Rue Rachel Est.",
            "• Bottled water distribution available at Laurier Park during the interruption."
        ],
        location: "Rue Saint-Denis & Rue Rachel Est, Montréal, QC"
    },
    {
        name: "Garbage pickup delayed in Côte-des-Neiges–Notre-Dame-de-Grâce",
        date: "Published April 6, 2025 - 8:45 am",
        borough: "CDN",
        text: [
            "• Garbage collection will be delayed by 24 hours due to mechanical issues.",
            "• Residents are asked to leave bins curbside until pickup is complete.",
            "• Updates will be provided on the borough's website."
        ],
        location: "Côte-des-Neiges–Notre-Dame-de-Grâce, Montréal, QC"
    },
    {
        name: "Temporary park closure: Parc Jarry maintenance",
        date: "Published April 6, 2025 - 3:30 pm",
        borough: "Jarry",
        text: [
            "• Parc Jarry will be closed for scheduled spring maintenance.",
            "• All walking paths and sports fields will be inaccessible.",
            "• The park will reopen on the morning of 04/11/2025, weather permitting."
        ],
        location: "285 Rue Gary-Carter, Montréal, QC H2R 2W1"
    },
    {
        name: "Emergency repairs: Saint-Laurent Metro Station elevator",
        date: "Published April 6, 2025 - 7:15 pm",
        borough: "Saint-Laurent",
        text: [
            "• The elevator at Saint-Laurent Station will be out of service until further notice.",
            "• Accessibility options available at nearby Berri-UQAM and Place-des-Arts stations.",
            "• STM apologizes for the inconvenience."
        ],
        location: "Saint-Laurent Metro Station, Montréal, QC"
    },
    {
        name: "Street closure alert – Rue Sainte-Catherine Ouest",
        date: "Published April 7, 2025 - 9:00 am",
        borough: "DTOWN",
        text: [
            "• Rue Sainte-Catherine Ouest will be closed between Rue Guy and Rue Bishop.",
            "• Closure in effect from 9:00 a.m. to 8:00 p.m. daily for road resurfacing.",
            "• Detours and traffic redirection signs will be in place."
        ],
        location: "Rue Sainte-Catherine Ouest, Montréal, QC"
    }
]