import React from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.font.size = 14;
ChartJS.defaults.color = '#fff';
ChartJS.defaults.font.family = 'Yekan-Bold';

export default class Charts extends React.Component {
    constructor() {
        super();
        this.state = {
            charts: null,
            successful: false,
        };
    };

    componentDidMount() {
        this.getChartInformation().then(response => {
            this.setState({
                charts: response,
                successful: true,
            });
        });
    };

    async getChartInformation() {
        const response = await fetch('http://localhost:3030/chart');
        return await response.json();
    };

    render() {

        let finalCharts;
        let typeChart;
        let backgroundChart;
        if (this.state.successful) {
            finalCharts = this.state.charts.map(info => {
                switch (info.id) {
                    case 1:
                        typeChart = <Pie data={info} />;
                        backgroundChart = "bg-primary";
                        break;
                    case 2:
                        typeChart = <Doughnut data={info} />;
                        backgroundChart = "bg-green";
                        break;
                    case 3:
                        typeChart = <Pie data={info} />;
                        backgroundChart = "bg-gray";
                        break;
                };

                return (
                    <div key={info.id} className="col-span-4 bg-white p-5 rounded-xl shadow-all">
                        <div className={`${backgroundChart} p-2 rounded-lg -translate-y-12 shadow-all`}>
                            {typeChart}
                        </div>
                        <h4 className="text-gray-900 font-Yekan-Bold text-lg">{info.title}</h4>
                        <p className="font-Yekan-Light text-base text-gray-500 pb-2 border-b-[1px]">{info.description}</p>
                        <span className="font-Yekan-Light text-base text-gray-500 flex items-center pt-2"> <AiOutlineDownCircle className="ml-2" />{info.updated}</span>
                    </div>
                );
            });
        }

        return (
            <div className="grid grid-cols-12 gap-5 mt-12">

                {finalCharts}

            </div>
        );
    };

};