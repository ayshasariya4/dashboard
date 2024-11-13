// Total Users Line Chart
const totalUsersCtx = document.getElementById('totalUsersChart').getContext('2d');
new Chart(totalUsersCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'This Year',
                data: [10000, 15000, 12000, 17000, 14000, 19000, 22000],
                borderColor: '#00000',
                fill: false,
                tension: 0.4, // Smooth curve (spline)
                borderWidth: 1,
                pointRadius: 0, // Larger points for better visibility
                pointBackgroundColor: '#4e73df',
                pointHoverRadius: 8, // Hover effect for points
                pointHoverBackgroundColor: '#ffffff', // White background on hover
                pointBorderWidth: 2, // Border width for points
            },
            {
                label: 'Last Year',
                data: [9000, 13000, 11000, 16000, 12000, 18000, 20000],
                borderColor: '#a3a4a6',
                
                 // Dashed line for a modern effect
                fill: false,
                tension: 0.4, // Smooth curve (spline)
                borderWidth: 1,
                pointRadius: 0, // Larger points for visibility
                pointBackgroundColor: '#a3a4a6',
                pointHoverRadius: 8, // Hover effect for points
                pointHoverBackgroundColor: '#ffffff',
                pointBorderWidth: 2,
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Disables the legend display in the chart
            },
            tooltip: {
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#fff',
                borderWidth: 1,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false // Remove grid lines for a cleaner look
                },
                ticks: {
                    stepSize: 5000, // Custom step size for ticks
                    callback: function(value) {
                        if (value % 10000 === 0) {
                            return value / 1000 + 'k'; // Add "k" to large numbers
                        }
                        return '';
                    }
                }
            },
            x: {
                grid: {
                    display: false // Remove grid lines for a modern feel
                }
            }
        }
    }
});


// Traffic by Website Bar Chart
// const trafficByWebsiteCtx = document.getElementById('trafficByWebsiteChart').getContext('2d');

// new Chart(trafficByWebsiteCtx, {
//     type: 'bar', // 'bar' type will automatically create horizontal bars with correct configuration
//     data: {
//         labels: ['Google', 'YouTube', 'Instagram', 'Pinterest', 'Facebook', 'Twitter'], // Website names
//         datasets: [{
//             label: 'Traffic',
//             data: [5000, 4000, 3000, 2000, 1000, 1500], // Traffic data
//             backgroundColor: function(context) {
//                 const value = context.raw; // Get the raw data value for each bar
//                 const max = Math.max(...context.dataset.data); // Find the maximum value in the dataset
//                 const min = Math.min(...context.dataset.data); // Find the minimum value in the dataset
                
//                 // Create a gradient based on the value relative to the min and max
//                 const gradient = context.chart.ctx.createLinearGradient(0, 0, context.chart.width, 0);
//                 gradient.addColorStop(0, 'green'); // Start color (low value)
//                 gradient.addColorStop(1, 'red');   // End color (high value)

//                 // Return the gradient for the current value
//                 return gradient;
//             },
//             borderRadius: 20, // Rounded corners for the bars
//             barThickness: 20, // Thickness of the bars
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: false, // Hide legend
//             }
//         },
//         scales: {
//             x: {
//                 beginAtZero: true, // Start the progress bars at 0
//                 grid: {
//                     display: false, // Hide grid lines
//                 },
//                 ticks: {
//                     max: 6000, // Set max value for x-axis (adjust based on your max data value)
//                     stepSize: 1000, // Set step size for ticks
//                     display: true, // Show x-axis ticks
//                 }
//             },
//             y: {
//                 beginAtZero: true,
//                 grid: {
//                     display: false, // Hide grid lines
//                 },
//                 ticks: {
//                     display: true, // Show the y-axis labels (website names)
//                     padding: 10, // Space between bars and labels
//                 }
//             }
//         },
//         elements: {
//             bar: {
//                 borderRadius: 10, // Apply rounded corners for a smoother look
//             }
//         }
//     }
// });


// Traffic by Device Bar Chart
const trafficByDeviceCtx = document.getElementById('trafficByDeviceChart').getContext('2d');
new Chart(trafficByDeviceCtx, {
    type: 'bar',
    data: {
        labels: ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Other'],
        datasets: [{
            label: 'Users',
            data: [8000, 15000, 12000, 20000, 10000, 7000],
            backgroundColor: ['#95A4FC', '#BAEDBD', '#000000', '#B1E3FF', '#B1E3FF', '#A1E3CB']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false // Hide grid lines on the y-axis
                },
                ticks: {
                    stepSize: 5000, // Step size for ticks
                    callback: function(value) {
                        if (value % 10000 === 0) { // For multiples of 10k
                            return value / 1000 + 'k'; // Display in "k"
                        }
                        return '';
                    }
                }
            },
            x: {
                grid: {
                    display: false // Hide grid lines on the x-axis
                }
            }
        },
        elements: {
            bar: {
                borderRadius: 7, // Apply border radius to the top corners
                borderSkipped: false, // Apply border radius to all sides (including bottom)
            }
        },
        // Adjust bar width and spacing
        layout: {
            padding: {
                left: 10,
                right: 10
            }
        },
        responsive: true,
        barPercentage: 0.5, // Controls the width of the bars
        categoryPercentage: 0.8 // Controls the space between bars

    }
});


// Traffic by Location Pie Chart
const locationData = {
    labels: ['United States', 'Canada', 'Mexico', 'Others'],
    datasets: [{
        label: 'Traffic by Location',
        data: [52.1, 22.8, 13.9, 11.2], // Updated percentage data
        backgroundColor: [
            '#00000', // Blue for United States
            '#A1E3CB', // Green for Canada
            '#BAEDBD', // Yellow for Mexico
            '#95A4FC'  // Gray for Others
        ],
        hoverOffset: 4,
        borderRadius: 10
    }]
};

const locationChartConfig = {
    type: 'doughnut', // Ring (doughnut) chart type
    data: locationData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // Hide default legend
            },
            tooltip: {
                enabled: true // Enable tooltips for hover
            }
        },
        layout: {
            padding: {
                right: 150 // Space for the custom legend on the right
            }
        },
        cutout: '60%' // Adjust cutout size for ring effect
    },
    plugins: [{
        id: 'customLegend',
        afterDraw: (chart) => {
            const { ctx, chartArea: { top, right, height } } = chart;
            const fontSize = 14;
            const legendX = right + 20; // Position legend to the right of the chart
            const legendYStart = top + height / 4; // Start legend vertically centered
            const items = chart.data.labels.map((label, index) => ({
                text: `${label} - ${chart.data.datasets[0].data[index]}%`,
                color: chart.data.datasets[0].backgroundColor[index]
            }));

            ctx.font = `${fontSize}px Arial`;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';

            // Draw each label with bullet
            items.forEach((item, i) => {
                const legendY = legendYStart + i * (fontSize + 15); // Vertical spacing
                // Draw color bullet
                ctx.fillStyle = item.color;
                ctx.beginPath();
                ctx.arc(legendX, legendY, 6, 0, Math.PI * 2);
                ctx.fill();

                // Draw label text
                ctx.fillStyle = '#333';
                ctx.fillText(item.text, legendX + 15, legendY);
            });
        }
    }]
};

// Initialize the chart
const ctx = document.getElementById('trafficByLocationChart').getContext('2d');
const trafficByLocationChart = new Chart(ctx, locationChartConfig);



function toggleHighlight(clicked) {
    if (clicked === 'favorites') {
        // Hide recently list and show favorites list
        document.getElementById('recentlyList').style.display = 'none';
        document.getElementById('favoritesList').style.display = 'block';

        // Change link styles
        document.getElementById('favorites').classList.remove('text-muted');
        document.getElementById('favorites').classList.add('text-dark', 'fw-bold');
        document.getElementById('recently').classList.remove('text-dark', 'fw-bold');
        document.getElementById('recently').classList.add('text-muted');
    } else if (clicked === 'recently') {
        // Hide favorites list and show recently list
        document.getElementById('favoritesList').style.display = 'none';
        document.getElementById('recentlyList').style.display = 'block';

        // Change link styles
        document.getElementById('recently').classList.remove('text-muted');
        document.getElementById('recently').classList.add('text-dark', 'fw-bold');
        document.getElementById('favorites').classList.remove('text-dark', 'fw-bold');
        document.getElementById('favorites').classList.add('text-muted');
    }
}
window.onload = function() {
    toggleHighlight('favorites');
};