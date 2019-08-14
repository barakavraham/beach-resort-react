import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free cocktails",
                info: "Boasn kdkam eodlr mmasda, ksadu e,   adskdask!"
            },
            {
                icon: <FaHiking/>,
                title: "Endless hikinh",
                info: "Boasn kdkam eodlr mmasda, ksadu e,   adskdask!"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free shuttle",
                info: "Boasn kdkam eodlr mmasda, ksadu e,   adskdask!"
            },
            {
                icon: <FaBeer/>,
                title: "Strongest beer",
                info: "Boasn kdkam eodlr mmasda, ksadu e,   adskdask!"
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="services">
                    <Title title="Services" />
                    <div className="services-center">
                        {this.state.services.map((item,index) => {
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
