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
            <Chart className="md:w-[300px] lg:w-[1200px] md:h-[200px]" type="pie" width={1000} height={400} series={[countDonation,12]} options={{
                labels: ['Your Donation', 'Total Donation'],
                noData:{text: "No doneted yet"},
                colors: ['#00C49F','#FF444A']
            }}>

            </Chart>
        </div>
    );
};

export default Statistics;