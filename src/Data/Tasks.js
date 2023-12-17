export let Tasklist = [
    {
        id: 1,
        name: "Кредиты",
        level: 0,
        isGoup: true,
        isOpen: false,
        isFlag: false,
        parent: 0,
        visible: true,
    },
    {
        id: 14,
        name: "Кредиты отчеты",
        level: 1,
        isGoup: false,
        isOpen: false,
        isFlag: false,
        parent: 1,
        visible: false,
    },
    {
        id: 2,
        name: "Согласование договоров",
        level: 0,
        isGoup: true,
        isOpen: false,
        isFlag: false,
        parent: 0,
        visible: true,
    },
    {
        id: 3,
        name: "Отдел юридических вопросов",
        level: 1,
        isGoup: true,
        isOpen: false,
        isFlag: false,
        parent: 2,
        visible: false,
    },
    {
        id: 4,
        name: "Реестр договоров",
        level: 2,
        isGoup: false,
        isOpen: false,
        isFlag: false,
        parent: 3,
        visible: false,
    },
    {
        id: 5,
        name: "Реестр приложений",
        level: 2,
        isGoup: false,
        isOpen: false,
        isFlag: true,
        parent: 3,
        visible: false,
    },
    {
        id: 6,
        name: "Отчеты",
        level: 2,
        isGoup: false,
        isOpen: false,
        isFlag: true,
        parent: 3,
        visible: false,
    },
    {
        id: 7,
        name: "Выписки",
        level: 2,
        isGoup: false,
        isOpen: false,
        isFlag: false,
        parent: 3,
        visible: false,
    },
    {
        id: 8,
        name: "Отдел сопровождения сделок",
        level: 1,
        isGoup: true,
        isOpen: false,
        isFlag: false,
        parent: 2,
        visible: false,
    },
    {
        id: 9,
        name: "Сделки",
        level: 2,
        isGoup: false,
        isOpen: false,
        isFlag: false,
        parent: 8,
        visible: false,
    },
    {
        id: 10,
        name: "Отдел безопастности",
        level: 1,
        isGoup: true,
        isOpen: false,
        isFlag: false,
        parent: 2,
        visible: false,
    },
    {
        id: 11,
        name: "Отчеты",
        level: 2,
        isGoup: false,
        isOpen: false,
        isFlag: true,
        parent: 10,
        visible: false,
    },
    {
        id: 12,
        name: "Карточные продукты",
        level: 1,
        isGoup: true,
        isOpen: false,
        isFlag: false,
        parent: 2,
        visible: false,
    },
    {
        id: 13,
        name: "Отчеты",
        level: 2,
        isGoup: false,
        isOpen: false,
        isFlag: true,
        parent: 12,
        visible: false,
    },
];

function setOpenCloseChildTask(id, isopen) {
    Tasklist.map((task) => {
        if (task.parent === id) {
            task.visible = isopen;
            if (!isopen) {
                task.isOpen = false;
                setOpenCloseChildTask(task.id, isopen);
            }
        }
    });
}

export function setOpenCloseTask(id) {
    let isopen = false;
    Tasklist.map((task) => {
        if (task.id === id) {
            task.isOpen = !task.isOpen;
            isopen = task.isOpen;
            setOpenCloseChildTask(task.id, isopen);
        }
    });
}
