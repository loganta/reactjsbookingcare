import React, { Component } from "react";
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {
    render() {
        return (
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