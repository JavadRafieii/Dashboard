import React from "react";
import Cards from "./Cards";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import Charts from "./Charts";
import Users from "./Users";
import { removeUser } from "./Remove-user";
import { addUser } from "./Add-user";
import { editUser } from "./Edit-user";

export default class FirstSection extends React.Component {
    constructor() {
        super();
        this.state = {
            cards: [
                { id: 1, title: "پول امروز", amount: "۵۳,۰۰۰ تومان", percent: " ۵۵ % + ", description: "نسبت به هفته گذشته", icon: <AiOutlineDollarCircle className="text-white text-2xl" /> },
                { id: 2, title: "کاربران امروز", amount: "۲,۳۰۰", percent: " ۳ % + ", description: "درصد نسبت به ماه گذشته", icon: <AiOutlineUser className="text-white text-2xl" /> },
                { id: 3, title: "مشتریان جدید", amount: "۳,۴۶۲", percent: " ۲ % + ", description: "نسبت به دیروز", icon: <AiOutlineUser className="text-white text-2xl" /> },
                { id: 4, title: "فروش", amount: "۱۰,۰۰۰,۰۰۰ میلیون", percent: " ۳ % + ", description: "نسبت به دیروز", icon: <AiOutlineDollarCircle className="text-white text-2xl" /> },
            ],
            users: null,
            successful: false,
        };
    };

    componentDidMount() {
        this.getUsersFromDataBase();
    };

    getUsersFromDataBase() {
        fetch("http://localhost:3030/users")
            .then(response => {
                if (response.ok) {
                    return response.json();
                };
            }).then(response => {
                this.setState({
                    users: response,
                    successful: true,
                });
            });
    };

    render() {

        return (
            <div className="col-span-10 h-[86vh] overflow-y-scroll no-scrollbar">
                <Cards cards={this.state.cards} />
                <Charts />
                <Users
                    users={this.state.users}
                    successful={this.state.successful}
                    removeUser={removeUser.bind(this)}
                    addUser={addUser.bind(this)}
                    editUser={editUser.bind(this)}
                />
            </div>
        );
    };
};