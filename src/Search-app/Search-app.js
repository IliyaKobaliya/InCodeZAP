import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import './Search_Style.css';


class Search extends Component {
    constructor() {
        super();
        this.name = 'Search'
    }

    giveStore() {
        // console.log('findStore', this.searchInput.value);
        this.props.onClickBTN(this.searchInput.value, this.props.testStore)
    }

    render() {
        return (
            <Grid  className={"animated slideInDown fast"} container id={'Search'} direction="row" justify="center" alignItems="center">
                <Grid item xs={11} id={'search_div'}>
                    <input placeholder={'Search...'} id={'search_input'} type="text" ref={(input) => {
                        this.searchInput = input
                    }}/>
                    <button id={'search_btn'} onClick={this.giveStore.bind(this)}><i className="fas fa-search big"/></button>
                </Grid>
            </Grid>
        )
    }
}

export default connect(
    state => ({
        testStore: state[0],
    }),
    action => ({
        onClickBTN: (text, store) => {
            store.map(ThisClient => (!ThisClient.general.firstName.includes(text) && !ThisClient.general.lastName.includes(text)) ? ThisClient.general.show = false : ThisClient.general.show = true);
            action({type: 'AddList', payload: [store]})
        }
    })
)(Search)




