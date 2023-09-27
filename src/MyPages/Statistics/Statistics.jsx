import { useEffect, useState } from "react";
import Chart from "react-apexcharts"
const Statistics = () => {
    const [countDonation, setCountDonation] = useState([]);

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('items'));
        donationItems ? setCountDonation(donationItems.length) : setCountDonation('')
        
    },[]);
    // const chartData = 




    return (
        <div className=" max-w-[1400px] mx-auto flex justify-center items-center h-[80vh]">
            <Chart type="pie" width={1000} height={400} series={[countDonation,12-countDonation]} options={{
                labels: ['Your Donation', 'Total Donation'],
                noData:{text: "No doneted yet"},
                colors: ['#00C49F','#FF444A'],
                legend: {
                    position: 'bottom',
                  }
            }}>

            </Chart>
        </div>
    );
};

export default Statistics;