
const projectsData = [
    {
        key: 1,
        imageSrc: `${process.env.PUBLIC_URL}/scheduler.png`,
        overlayText: "Scheduler Web Application (In Production)",
        paragraph: "The Scheduler application modernized the outpatient respiratory telehealth scheduling process by transitioning from Excel-based methods to an integrated web-based solution. Used daily by over 100 users for extended periods, the application maintains 99% uptime and has transformed patient scheduling by reducing time per patient by 80%. Its real-time appointment tracking and automated reminders decreased missed appointments by 20%, while improved staff coordination boosted efficiency by 30%. By simplifying workflows and increasing customer satisfaction, this has become an important tool."
    },
    {
        key: 2,
        imageSrc: `${process.env.PUBLIC_URL}/adam.png`,
        overlayText: "CoreLink Web Application (In Production)",
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
    {
        key: 5,
        imageSrc: `${process.env.PUBLIC_URL}/lambda.jpeg`,
        overlayText: "OpenLambda (GitHub)",
        paragraph: "OpenLambda is an open-source serverless platform focused on scalability and performance. I am working on enhancing its distributed architecture, optimizing event-driven execution, and improving resource management. Additionally, I am designing dynamic APIs, implementing performance optimizations, and deepening my expertise in Go and Python for systems programming."
    },
    {
        key: 6,
        imageSrc: `${process.env.PUBLIC_URL}/vector_search.webp`,
        overlayText: "Disk-Based Vector Search in Quake (GitHub)",
        paragraph: "This project aims to modify Quake, a partition-based vector indexing system, to support disk-based vector search for large-scale datasets. Currently, Quake stores all partitions in memory, limiting its scalability. We are working on storing vector partitions on disk while maintaining Quake’s existing API for seamless integration. Additionally, a hybrid caching strategy will be implemented to store frequently accessed data in DRAM, reducing query latency and improving performance. This approach will make Quake more scalable and cost-efficient for handling large datasets in real-world applications"
    },
];

export default projectsData;
