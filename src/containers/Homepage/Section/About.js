import React, { Component } from "react";
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";

class About extends Component {
    render() {
        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyen thong noi gi ve booking care VN
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/0anY755qfG0?si=D_OB-F3mlJY9SUAL"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="content-right">
                        <p>We are all strong in different ways. Some of us keep a cool head in any argument. Some of us are good at listening. Some of us are good at having a positive outlook when faced with a negative situation. Some of us are good at speaking up and raising our voices when something’s not right. Some of us are good at recognizing when to let things go.</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);