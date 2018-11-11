import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import './Style.css';
import Search from './Search-app/Search-app';
import ClientsList from './ClientsList-app/ClientsList-app';
import ClientsInfo from './ClientInfo-app/ClientInfo-app'
import findStore from './reducer/redux';

const store = createStore(findStore);

const HTML = () => {
    return (
        <Provider store={store}>
        <Grid container>
            <Grid item key={'left'} className={'left'} xs={12} sm={4}>
                <Grid item className={'search'}><Search/></Grid>
                <Grid item className={'clientsList'}><ClientsList/></Grid>
            </Grid>
            <Grid item key={'right'} className={'right'} xs={12} sm={8}>
                <Grid item xs={12}><ClientsInfo/></Grid>
            </Grid>
        </Grid>
        </Provider>
    )
};

ReactDOM.render(<HTML/>, document.getElementById('root'));

