import React, {Component} from 'react';
import {connect} from "react-redux";
import './ClientInfo_Style.css';
import Grid from '@material-ui/core/Grid';

class ClientsInfo extends Component {
    render() {
        this.personInfo = {
            avatar: `${this.props.testStore.general.avatar}`,
            name: `${this.props.testStore.general.firstName} ${this.props.testStore.general.lastName}`,
            job: `${this.props.testStore.job.title} ( ${this.props.testStore.job.company} )`,
            address: {
                street: `${this.props.testStore.address.street}`,
                city: `${this.props.testStore.address.city}`,
                zipCode: `${this.props.testStore.address.zipCode}`,
                country: `${this.props.testStore.address.country}`
            },
            contact: {
                email: `${this.props.testStore.contact.email}`,
                phone: `${this.props.testStore.contact.phone}`
            }
        };
        return (
            <Grid container id={'Clients_Info'}>
                 <Grid item xs={12} lg={4} id={'Client_avatar_img'} className={"animated slideInDown fast"}>
                     <img src={this.personInfo.avatar} alt="Avatar"/>
                 </Grid>
                 <Grid item xs={12} lg={8} id={'Client_text'} className={"animated slideInDown fast"}>
                     <div id={'personalInfo'}>
                         <h1>{this.personInfo.name}</h1>
                         <div className={'info_container'}><b>Job :</b>
                             <div className={'Info_list list_df'}>
                                 <span className={'infoItem'}>{this.personInfo.job}</span>
                             </div>
                         </div>
                     </div>
                     <div id={'otherInfo'}>
                         <div className={'info_container'}><b>Address :</b>
                             <div className={'Info_list list_df'}>
                                 <span>1) Street: {this.personInfo.address.street}</span>
                                 <span>2) City: {this.personInfo.address.city}</span>
                                 <span>3) Zip code: {this.personInfo.address.zipCode}</span>
                                 <span>4) Country: {this.personInfo.address.country}</span>
                             </div>
                             <div className={'info_container'}><b>Contacts :</b>
                                <div className={'Info_list list_df'}>
                                    <span>1) Email: {this.personInfo.contact.email}</span>
                                    <span>2) Phone: {this.personInfo.contact.phone}</span>
                                </div>
                             </div>
                         </div>
                     </div>
                 </Grid>
            </Grid>
        )
    }
}
export default connect(
    state => ({
        testStore: state[1]
    })
)(ClientsInfo)