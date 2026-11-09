import taskHandler from "./core/taskHandler.js";

export const createDummyTasks = () => {
    const dummyTasks = [
        [
            "Study",
            "High",
            "Tomorrow",
            "I have to study for my final exam which is on tomorrow! I need to be a great Software engineer so I need to study well and learn these very well and get great marks!"
        ],

        [
            "Cleaning",
            "Medium",
            "This Week",
            "We will have guests this week and mom asked me to clean my room, so I will respect her and clean my room this week before the guests come over."
        ],

        [
            "Going out",
            "Low",
            "This Month",
            "Me and my friends decided to go outside together, a boys night, haven't decided on when and where exactly but probably somewhere inside city probably a Bar or maybe we go get some fast food."
        ],
        
        [
            "Review project proposal",
            "High",
            "2026-11-10",
            "Check scope, timeline, and open questions before sending feedback."
        ],

        [
            "Team stand-up meeting",
            "Medium",
            "2026-11-11",
            "Prepare quick updates on current blockers and progress."
        ],

        [
            "Update website copy",
            "Medium",
            "2026-11-12",
            "Revise homepage text and fix typos."
        ],

        [
            "Fix login page bug",
            "High",
            "2026-11-16",
            "Investigate password reset error and deploy a patch."
        ],
    ]

    dummyTasks.forEach(element => {
        taskHandler.createNewTask(element[0], element[1], element[2], element[3]);
    });
};