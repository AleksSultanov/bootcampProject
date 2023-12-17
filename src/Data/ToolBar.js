export let ToolBarData = {
    Bar: { id: 1, open: true, disable: false, bottom: false, count: null },
    Task: { id: 2, open: false, disable: false, bottom: false, count: 7 },
    list: { id: 3, open: false, disable: false, bottom: false, count: 8 },
    Bell: { id: 4, open: false, disable: false, bottom: false, count: 99 },
    Card: { id: 5, open: false, disable: true, bottom: true, count: null },
};

export function setBarClose(ToolBarData) {
    let isOpenPanel_tmp = ToolBarData;
    Object.keys(isOpenPanel_tmp).map((key) => {
        isOpenPanel_tmp[key].open = false;
    });
    return isOpenPanel_tmp;
}

export function isOpenBar(ToolBarData) {
    let isOpen = false;
    Object.keys(ToolBarData).map((key) => {
        if (ToolBarData[key].open) {
            isOpen = true;
        }
    });
    return isOpen;
}

export function setFieldOpenPanel(ToolBarData, key, value) {
    if (value) {
        setBarClose(ToolBarData);
    }
    let isOpenPanel_tmp = ToolBarData;
    isOpenPanel_tmp[key].open = value;
    return isOpenPanel_tmp;
}
