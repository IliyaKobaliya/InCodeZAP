import React, {Component} from 'react';
import './ClientsList_Style.css';
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid';

class ClientsList extends Component {
    render() {
        this.clients = this.props.testStore[0].map((client) => {
            if (client.general.show) {
                return (
                    <Grid key={client.address.zipCode} container direction={'row'} className={'clients_container animated slideInDown fast' }
                          onClick={() => this.props.onActiveClient(client)}>
                        <Grid item xs={4}  className={'Small_avatar'}>
                            <img src={client.general.avatar} alt="avatar"/>
                        </Grid>
                        <Grid item xs={8}  className={'Personal_info'}>
                            <span className={'text nameList'}>{client.general.firstName} {client.general.lastName}</span>
                            <span className={'text jobList'}>{client.job.title}</span>
                        </Grid>
                    </Grid>
                )
            }
            else {
                return false
            }
        });
        return (
            <Grid container>
                {this.clients}
            </Grid>
        )
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    action => ({
        onActiveClient: (client) => {
            action({type: 'AddActive', payload: client});
        }
    })
)(ClientsList)


