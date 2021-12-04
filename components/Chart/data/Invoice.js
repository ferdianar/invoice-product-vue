export const InvoiceData = {
    type: "bar",
    data: {
        labels: ["Invoiced", "Paid/Collected", "Overdue"],
        datasets: [{
            label: "Total Invoices",
            data: [357, 288, 467],
            backgroundColor: ["rgb(54,73,93)", "yellow ", "red"],
            borderColor: "transparent",
            borderWidth: 1,
            spacing: 10
        }]
    },
    options: {
        title: {
            display: true,
            text: "Summary Invoices"
        },
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    padding: 25
                }
            }]
        },
        plugins: {
            tooltip: {
                callbacks: {
                    labelColor: (context) => {
                        return {
                            borderColor: "rgb(0, 0, 255)",
                            backgroundColor: "yellow",
                            borderWidth: "1",
                            borderRadius: 4
                        }
                    },
                    labelTextColor: (context) => {
                        return "#545454"
                    }
                }
            },
            datalabels: {
                display: true,
                formatter: (value) => {
                    return value + "%"
                }
            }
        }
    }
}


export default InvoiceData;