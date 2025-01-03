
const projectsData = [
    {
        key: 1,
        imageSrc: `${process.env.PUBLIC_URL}/scheduler.png`,
        overlayText: "Scheduler Web Application",
        paragraph: "The Scheduler application modernized the outpatient respiratory telehealth scheduling process by transitioning from Excel-based methods to an integrated web-based solution. Used daily by over 100 users for extended periods, the application maintains 99% uptime and has transformed patient scheduling by reducing time per patient by 80%. Its real-time appointment tracking and automated reminders decreased missed appointments by 20%, while improved staff coordination boosted efficiency by 30%. By simplifying workflows and increasing customer satisfaction, this has become an important tool."
    },
    {
        key: 2,
        imageSrc: `${process.env.PUBLIC_URL}/adam.png`,
        overlayText: "CoreLink Web Application",
        paragraph: "The CoreLink application revolutionized call handling for inpatient hospitals by enabling users to seamlessly sign up for shifts and manage incoming calls. By integrating a WebSocket-based system to replace a legacy polling mechanism, it drastically improved real-time data updates while reducing unnecessary server requests by 75%. This optimization decreased call wait times by 50% and reduced server load by 80%, significantly enhancing performance and user experience."
    },
    {
        key: 3,
        imageSrc: `${process.env.PUBLIC_URL}/wisconsinShell.webp`,
        overlayText: "Unix Shell",
        paragraph: "The Wisconsin Shell (wsh) is a Unix shell implementation designed to explore command-line interpreter functionality, offering features like command execution, redirections, environment and shell variable management, command history tracking, and built-in commands (exit, cd, export, local, vars, history), supporting both interactive and batch modes with additional comment handling."
    },
    {
        key: 4,
        imageSrc: `${process.env.PUBLIC_URL}/fileSystem.webp`,
        overlayText: "FUSE-based Unix filesystem",
        paragraph: "This project involves implementing a FUSE-based Unix filesystem in C with RAID 0 and RAID 1 capabilities, supporting basic file and directory operations, metadata management, and error handling, while adhering to specific on-disk data structures and RAID configurations."
    },
];

export default projectsData;
