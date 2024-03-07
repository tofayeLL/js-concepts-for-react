
sessionStorage.setItem('userId', 67832456);


const addToLocalStorage = () => {
    const idField = document.getElementById('storage-id');
    const valueField = document.getElementById('storage-value');
    const id = idField.value;
    const value = valueField.value;
    if(id && value){
        localStorage.setItem(id, value);
    }
    idField.value = '';
    valueField.value = '';


}