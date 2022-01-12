export default class View {
    _data;

    render(data) {
        if(!data || (Array.isArray(data) && data.length === 0)) {
            const errorMessage = this._renderError();
            this._parentElement.insertAdjacentHTML('beforeend', errorMessage);
        } else {
            this._data = data;
            const view = this._generateView();
    
            this._parentElement.insertAdjacentHTML('beforeend', view);
        }
    }
}