import React, { Component } from "react";
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <div className="header-logo"></div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div><b>Chuyen Khoa</b></div>
                                <div className="sub-title">Tim bac si theo chuyen khoa</div>
                            </div>
                            <div className="child-content">
                                <div><b>Co so y te</b></div>
                                <div className="sub-title">Chon benh vien phong kham</div>
                            </div>
                            <div className="child-content">
                                <div><b>Bac si</b></div>
                                <div className="sub-title">Chon bac si gioi</div>
                            </div>
                            <div className="child-content">
                                <div><b>Goi kham</b></div>
                                <div className="sub-title">Kham suc khoe tong quat</div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support"><i className="fas fa-question-circle"></i>Ho tro</div>
                            <div className="flag">VN</div>
                        </div>
                    </div>

                </div>

                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1">NEN TANG Y TE</div>
                        <div className="title2">CHAM SOC SUC KHOE TOAN DIEN</div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Tim chuyen khoa kham benh" />
                        </div>
                    </div>
                    <div className="content-down">
                        <div className="options">
                            <div className="option-child">
                                <div className="icon-child"><i className="far fa-hospital"></i></div>
                                <div className="text-child">Kham chuyen khoa</div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="far fa-mobile-alt"></i></div>
                                <div className="text-child">Kham tu xa</div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="far fa-procedures"></i></div>
                                <div className="text-child">Kham tong quat</div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="far fa-miscroscope"></i></div>
                                <div className="text-child">Xet nghiem y hoc</div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="far fa-user-md"></i></div>
                                <div className="text-child">Suc khoe tinh than</div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="far fa-tooth"></i></div>
                                <div className="text-child">Kham nha khoa</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);