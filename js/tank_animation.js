FusionCharts.ready(function () {
    var chartObj = new FusionCharts({
        type: 'cylinder',
        dataFormat: 'json',
        renderAt: 'chart-container',
        width: '100%',
        height: '370',
        dataSource: {
            "chart": {
                "theme": "fusion",
                "bgColor": "#F7FAFF",
                "baseFont": "Rubik",         // Custom font
                // "baseFontSize": "14",         // Font size (optional)
                "baseFontColor": "#000",   // Font color (optional)
                "caption": "",
                "subcaption": "",
                "lowerLimit": "0",
                "upperLimit": "1000",
                "lowerLimitDisplay": "0 ltrs",
                "upperLimitDisplay": "1000 ltrs",
                "numberSuffix": " ltrs",
                "showValue": "1",
                "chartBottomMargin": "45",
                "showValue": "0",
                "refreshInterval": "1",
                "refreshInstantly": "1",
                "cylFillColor": "#35d1fd,#0f75bc",
                "cyloriginx": "160",
                "cyloriginy": "320",
                "cylradius": "110",
                "cylheight": "290",
                "showValue": "0",             // Show the numeric value
                "animation": "1",             // Enable animation
                "refreshInstantly": "0",      // Animate the change (not instantly jump)
                "refreshInterval": "1",
                "animationDuration": "2", // Set the duration of each animation
            },
            "value": "580",
            "annotations": {
                "origw": "400",
                "origh": "290",
                "autoscale": "1",
                "groups": [{
                    "id": "range",
                    "items": [
                        //     {
                        //     "id": "rangeBg",
                        //     "type": "rectangle",
                        //     "x": "$canvasCenterX-75",
                        //     "y": "$chartEndY-40",
                        //     "tox": "$canvasCenterX +55",
                        //     "toy": "$chartEndY-80",
                        //     "fillcolor": "#35d1fd"
                        // }, 
                        // {
                        //     "id": "rangeText",
                        //     "type": "Text",
                        //     "fontSize": "20",
                        //     "fillcolor": "#333333",
                        //     "text": "Loading...",
                        //     "x": "$chartCenterX-60",
                        //     "y": "$chartEndY-60"
                        // }
                    ]
                }]
            }

        },
        "events": {
            "rendered": function (evtObj, argObj) {

                evtObj.sender.chartInterval = setInterval(function () {
                    evtObj.sender.feedData && evtObj.sender.feedData("&value=");
                }, 2000);
            },
            /* Using real time update event to update the annotation */

            //showing available volume in tank (setting colors as per available volume)
            "realTimeUpdateComplete": function (evt, arg) {
                var annotations = evt.sender.annotations,
                    dataVal = evt.sender.getData(),
                    colorVal = (dataVal >= 600) ? "#6caa03" : ((dataVal <= 300) ? "#e44b02" : "#f8bd1b");
                //Updating the volume value
                annotations && annotations.update('rangeText', {
                    "text": "Available Volume: " + dataVal + " ltrs"
                });
                //setting background color of annotation as per value
                annotations && annotations.update('rangeBg', {
                    "fillcolor": colorVal
                });

            },
            "disposed": function (evt, arg) {
                clearInterval(evt.sender.chartInterval);
            }
        }
    }
    );

    chartObj.render();
});

FusionCharts.ready(function () {
    var chartObj = new FusionCharts({
        type: 'cylinder',
        dataFormat: 'json',
        renderAt: 'chart1-container',
        width: '100%',
        height: '370',
        dataSource: {
            "chart": {
                "theme": "fusion",
                "bgColor": "#F7FAFF",
                "baseFont": "Rubik",         // Custom font
                // "baseFontSize": "14",         // Font size (optional)
                "baseFontColor": "#000",   // Font color (optional)
                "caption": "",
                "subcaption": "",
                "lowerLimit": "0",
                "upperLimit": "1000",
                "lowerLimitDisplay": "0 ltrs",
                "upperLimitDisplay": "1000 ltrs",
                "numberSuffix": " ltrs",
                "showValue": "1",
                "chartBottomMargin": "45",
                "showValue": "0",
                "refreshInterval": "1",
                "refreshInstantly": "1",
                "cylFillColor": "#35d1fd,#0f75bc",
                "cyloriginx": "160",
                "cyloriginy": "320",
                "cylradius": "110",
                "cylheight": "290",
                "showValue": "0",             // Show the numeric value
                "animation": "1",             // Enable animation
                "refreshInstantly": "0",      // Animate the change (not instantly jump)
                "refreshInterval": "1",
                "animationDuration": "2", // Set the duration of each animation
            },
            "value": "690",
            "annotations": {
                "origw": "400",
                "origh": "290",
                "autoscale": "1",
                "groups": [{
                    "id": "range",
                    "items": [
                        //     {
                        //     "id": "rangeBg",
                        //     "type": "rectangle",
                        //     "x": "$canvasCenterX-75",
                        //     "y": "$chartEndY-40",
                        //     "tox": "$canvasCenterX +55",
                        //     "toy": "$chartEndY-80",
                        //     "fillcolor": "#35d1fd"
                        // }, 
                        // {
                        //     "id": "rangeText",
                        //     "type": "Text",
                        //     "fontSize": "20",
                        //     "fillcolor": "#333333",
                        //     "text": "Loading...",
                        //     "x": "$chartCenterX-60",
                        //     "y": "$chartEndY-60"
                        // }
                    ]
                }]
            }

        },
        "events": {
            "rendered": function (evtObj, argObj) {

                evtObj.sender.chartInterval = setInterval(function () {
                    evtObj.sender.feedData && evtObj.sender.feedData("&value=");
                }, 2000);
            },
            /* Using real time update event to update the annotation */

            //showing available volume in tank (setting colors as per available volume)
            "realTimeUpdateComplete": function (evt, arg) {
                var annotations = evt.sender.annotations,
                    dataVal = evt.sender.getData(),
                    colorVal = (dataVal >= 600) ? "#6caa03" : ((dataVal <= 300) ? "#e44b02" : "#f8bd1b");
                //Updating the volume value
                annotations && annotations.update('rangeText', {
                    "text": "Available Volume: " + dataVal + " ltrs"
                });
                //setting background color of annotation as per value
                annotations && annotations.update('rangeBg', {
                    "fillcolor": colorVal
                });

            },
            "disposed": function (evt, arg) {
                clearInterval(evt.sender.chartInterval);
            }
        }
    }
    );

    chartObj.render();
});


FusionCharts.ready(function () {
    var chartObj = new FusionCharts({
        type: 'cylinder',
        dataFormat: 'json',
        renderAt: 'chart2-container',
        width: '100%',
        height: '370',
        dataSource: {
            "chart": {
                "theme": "fusion",
                "bgColor": "#F7FAFF",
                "baseFont": "Rubik",         // Custom font
                // "baseFontSize": "14",         // Font size (optional)
                "baseFontColor": "#000",   // Font color (optional)
                "caption": "",
                "subcaption": "",
                "lowerLimit": "0",
                "upperLimit": "1000",
                "lowerLimitDisplay": "0 ltrs",
                "upperLimitDisplay": "1000 ltrs",
                "numberSuffix": " ltrs",
                "showValue": "1",
                "chartBottomMargin": "45",
                "showValue": "0",
                "refreshInterval": "1",
                "refreshInstantly": "1",
                "cylFillColor": "#35d1fd,#0f75bc",
                "cyloriginx": "160",
                "cyloriginy": "320",
                "cylradius": "110",
                "cylheight": "290",
                "showValue": "0",             // Show the numeric value
                "animation": "1",             // Enable animation
                "refreshInstantly": "0",      // Animate the change (not instantly jump)
                "refreshInterval": "1",
                "animationDuration": "2", // Set the duration of each animation
            },
            "value": "1000",
            "annotations": {
                "origw": "400",
                "origh": "290",
                "autoscale": "1",
                "groups": [{
                    "id": "range",
                    "items": [
                        //     {
                        //     "id": "rangeBg",
                        //     "type": "rectangle",
                        //     "x": "$canvasCenterX-75",
                        //     "y": "$chartEndY-40",
                        //     "tox": "$canvasCenterX +55",
                        //     "toy": "$chartEndY-80",
                        //     "fillcolor": "#35d1fd"
                        // }, 
                        // {
                        //     "id": "rangeText",
                        //     "type": "Text",
                        //     "fontSize": "20",
                        //     "fillcolor": "#333333",
                        //     "text": "Loading...",
                        //     "x": "$chartCenterX-60",
                        //     "y": "$chartEndY-60"
                        // }
                    ]
                }]
            }

        },
        "events": {
            "rendered": function (evtObj, argObj) {

                evtObj.sender.chartInterval = setInterval(function () {
                    evtObj.sender.feedData && evtObj.sender.feedData("&value=");
                }, 2000);
            },
            /* Using real time update event to update the annotation */

            //showing available volume in tank (setting colors as per available volume)
            "realTimeUpdateComplete": function (evt, arg) {
                var annotations = evt.sender.annotations,
                    dataVal = evt.sender.getData(),
                    colorVal = (dataVal >= 600) ? "#6caa03" : ((dataVal <= 300) ? "#e44b02" : "#f8bd1b");
                //Updating the volume value
                annotations && annotations.update('rangeText', {
                    "text": "Available Volume: " + dataVal + " ltrs"
                });
                //setting background color of annotation as per value
                annotations && annotations.update('rangeBg', {
                    "fillcolor": colorVal
                });

            },
            "disposed": function (evt, arg) {
                clearInterval(evt.sender.chartInterval);
            }
        }
    }
    );

    chartObj.render();
});

FusionCharts.ready(function () {
    var chartObj = new FusionCharts({
        type: 'cylinder',
        dataFormat: 'json',
        renderAt: 'chart3-container',
        width: '100%',
        height: '370',
        dataSource: {
            "chart": {
                "theme": "fusion",
                "bgColor": "#F7FAFF",
                "baseFont": "Rubik",         // Custom font
                // "baseFontSize": "14",         // Font size (optional)
                "baseFontColor": "#000",   // Font color (optional)
                "caption": "",
                "subcaption": "",
                "lowerLimit": "0",
                "upperLimit": "1000",
                "lowerLimitDisplay": "0 ltrs",
                "upperLimitDisplay": "1000 ltrs",
                "numberSuffix": " ltrs",
                "showValue": "1",
                "chartBottomMargin": "45",
                "showValue": "0",
                "refreshInterval": "1",
                "refreshInstantly": "1",
                "cylFillColor": "#35d1fd,#0f75bc",
                "cyloriginx": "160",
                "cyloriginy": "320",
                "cylradius": "110",
                "cylheight": "290",
                "showValue": "0",             // Show the numeric value
                "animation": "1",             // Enable animation
                "refreshInstantly": "0",      // Animate the change (not instantly jump)
                "refreshInterval": "1",
                "animationDuration": "2", // Set the duration of each animation
            },
            "value": "475",
            "annotations": {
                "origw": "400",
                "origh": "290",
                "autoscale": "1",
                "groups": [{
                    "id": "range",
                    "items": [
                        //     {
                        //     "id": "rangeBg",
                        //     "type": "rectangle",
                        //     "x": "$canvasCenterX-75",
                        //     "y": "$chartEndY-40",
                        //     "tox": "$canvasCenterX +55",
                        //     "toy": "$chartEndY-80",
                        //     "fillcolor": "#35d1fd"
                        // }, 
                        // {
                        //     "id": "rangeText",
                        //     "type": "Text",
                        //     "fontSize": "20",
                        //     "fillcolor": "#333333",
                        //     "text": "Loading...",
                        //     "x": "$chartCenterX-60",
                        //     "y": "$chartEndY-60"
                        // }
                    ]
                }]
            }

        },
        "events": {
            "rendered": function (evtObj, argObj) {

                evtObj.sender.chartInterval = setInterval(function () {
                    evtObj.sender.feedData && evtObj.sender.feedData("&value=");
                }, 2000);
            },
            /* Using real time update event to update the annotation */

            //showing available volume in tank (setting colors as per available volume)
            "realTimeUpdateComplete": function (evt, arg) {
                var annotations = evt.sender.annotations,
                    dataVal = evt.sender.getData(),
                    colorVal = (dataVal >= 600) ? "#6caa03" : ((dataVal <= 300) ? "#e44b02" : "#f8bd1b");
                //Updating the volume value
                annotations && annotations.update('rangeText', {
                    "text": "Available Volume: " + dataVal + " ltrs"
                });
                //setting background color of annotation as per value
                annotations && annotations.update('rangeBg', {
                    "fillcolor": colorVal
                });

            },
            "disposed": function (evt, arg) {
                clearInterval(evt.sender.chartInterval);
            }
        }
    }
    );

    chartObj.render();
});

FusionCharts.ready(function () {
    var chartObj = new FusionCharts({
        type: 'cylinder',
        dataFormat: 'json',
        renderAt: 'chart4-container',
        width: '100%',
        height: '370',
        dataSource: {
            "chart": {
                "theme": "fusion",
                "bgColor": "#F7FAFF",
                "baseFont": "Rubik",         // Custom font
                // "baseFontSize": "14",         // Font size (optional)
                "baseFontColor": "#000",   // Font color (optional)
                "caption": "",
                "subcaption": "",
                "lowerLimit": "0",
                "upperLimit": "1000",
                "lowerLimitDisplay": "0 ltrs",
                "upperLimitDisplay": "1000 ltrs",
                "numberSuffix": " ltrs",
                "showValue": "1",
                "chartBottomMargin": "45",
                "showValue": "0",
                "refreshInterval": "1",
                "refreshInstantly": "1",
                "cylFillColor": "#35d1fd,#0f75bc",
                "cyloriginx": "160",
                "cyloriginy": "320",
                "cylradius": "110",
                "cylheight": "290",
                "showValue": "0",             // Show the numeric value
                "animation": "1",             // Enable animation
                "refreshInstantly": "0",      // Animate the change (not instantly jump)
                "refreshInterval": "1",
                "animationDuration": "2", // Set the duration of each animation
            },
            "value": "475",
            "annotations": {
                "origw": "400",
                "origh": "290",
                "autoscale": "1",
                "groups": [{
                    "id": "range",
                    "items": [
                        //     {
                        //     "id": "rangeBg",
                        //     "type": "rectangle",
                        //     "x": "$canvasCenterX-75",
                        //     "y": "$chartEndY-40",
                        //     "tox": "$canvasCenterX +55",
                        //     "toy": "$chartEndY-80",
                        //     "fillcolor": "#35d1fd"
                        // }, 
                        // {
                        //     "id": "rangeText",
                        //     "type": "Text",
                        //     "fontSize": "20",
                        //     "fillcolor": "#333333",
                        //     "text": "Loading...",
                        //     "x": "$chartCenterX-60",
                        //     "y": "$chartEndY-60"
                        // }
                    ]
                }]
            }

        },
        "events": {
            "rendered": function (evtObj, argObj) {

                evtObj.sender.chartInterval = setInterval(function () {
                    evtObj.sender.feedData && evtObj.sender.feedData("&value=");
                }, 2000);
            },
            /* Using real time update event to update the annotation */

            //showing available volume in tank (setting colors as per available volume)
            "realTimeUpdateComplete": function (evt, arg) {
                var annotations = evt.sender.annotations,
                    dataVal = evt.sender.getData(),
                    colorVal = (dataVal >= 600) ? "#6caa03" : ((dataVal <= 300) ? "#e44b02" : "#f8bd1b");
                //Updating the volume value
                annotations && annotations.update('rangeText', {
                    "text": "Available Volume: " + dataVal + " ltrs"
                });
                //setting background color of annotation as per value
                annotations && annotations.update('rangeBg', {
                    "fillcolor": colorVal
                });

            },
            "disposed": function (evt, arg) {
                clearInterval(evt.sender.chartInterval);
            }
        }
    }
    );

    chartObj.render();
});

FusionCharts.ready(function () {
    var chartObj = new FusionCharts({
        type: 'cylinder',
        dataFormat: 'json',
        renderAt: 'chart5-container',
        width: '100%',
        height: '370',
        dataSource: {
            "chart": {
                "theme": "fusion",
                "bgColor": "#F7FAFF",
                "baseFont": "Rubik",         // Custom font
                // "baseFontSize": "14",         // Font size (optional)
                "baseFontColor": "#000",   // Font color (optional)
                "caption": "",
                "subcaption": "",
                "lowerLimit": "0",
                "upperLimit": "1000",
                "lowerLimitDisplay": "0 ltrs",
                "upperLimitDisplay": "1000 ltrs",
                "numberSuffix": " ltrs",
                "showValue": "1",
                "chartBottomMargin": "45",
                "showValue": "0",
                "refreshInterval": "1",
                "refreshInstantly": "1",
                "cylFillColor": "#35d1fd,#0f75bc",
                "cyloriginx": "160",
                "cyloriginy": "320",
                "cylradius": "110",
                "cylheight": "290",
                "showValue": "0",             // Show the numeric value
                "animation": "1",             // Enable animation
                "refreshInstantly": "0",      // Animate the change (not instantly jump)
                "refreshInterval": "1",
                "animationDuration": "2", // Set the duration of each animation
            },
            "value": "475",
            "annotations": {
                "origw": "400",
                "origh": "290",
                "autoscale": "1",
                "groups": [{
                    "id": "range",
                    "items": [
                        //     {
                        //     "id": "rangeBg",
                        //     "type": "rectangle",
                        //     "x": "$canvasCenterX-75",
                        //     "y": "$chartEndY-40",
                        //     "tox": "$canvasCenterX +55",
                        //     "toy": "$chartEndY-80",
                        //     "fillcolor": "#35d1fd"
                        // }, 
                        // {
                        //     "id": "rangeText",
                        //     "type": "Text",
                        //     "fontSize": "20",
                        //     "fillcolor": "#333333",
                        //     "text": "Loading...",
                        //     "x": "$chartCenterX-60",
                        //     "y": "$chartEndY-60"
                        // }
                    ]
                }]
            }

        },
        "events": {
            "rendered": function (evtObj, argObj) {

                evtObj.sender.chartInterval = setInterval(function () {
                    evtObj.sender.feedData && evtObj.sender.feedData("&value=");
                }, 2000);
            },
            /* Using real time update event to update the annotation */

            //showing available volume in tank (setting colors as per available volume)
            "realTimeUpdateComplete": function (evt, arg) {
                var annotations = evt.sender.annotations,
                    dataVal = evt.sender.getData(),
                    colorVal = (dataVal >= 600) ? "#6caa03" : ((dataVal <= 300) ? "#e44b02" : "#f8bd1b");
                //Updating the volume value
                annotations && annotations.update('rangeText', {
                    "text": "Available Volume: " + dataVal + " ltrs"
                });
                //setting background color of annotation as per value
                annotations && annotations.update('rangeBg', {
                    "fillcolor": colorVal
                });

            },
            "disposed": function (evt, arg) {
                clearInterval(evt.sender.chartInterval);
            }
        }
    }
    );

    chartObj.render();
});

FusionCharts.ready(function () {
    var chartObj = new FusionCharts({
        type: 'cylinder',
        dataFormat: 'json',
        renderAt: 'chart6-container',
        width: '100%',
        height: '370',
        dataSource: {
            "chart": {
                "theme": "fusion",
                "bgColor": "#F7FAFF",
                "baseFont": "Rubik",         // Custom font
                // "baseFontSize": "14",         // Font size (optional)
                "baseFontColor": "#000",   // Font color (optional)
                "caption": "",
                "subcaption": "",
                "lowerLimit": "0",
                "upperLimit": "1000",
                "lowerLimitDisplay": "0 ltrs",
                "upperLimitDisplay": "1000 ltrs",
                "numberSuffix": " ltrs",
                "showValue": "1",
                "chartBottomMargin": "45",
                "showValue": "0",
                "refreshInterval": "1",
                "refreshInstantly": "1",
                "cylFillColor": "#35d1fd,#0f75bc",
                "cyloriginx": "160",
                "cyloriginy": "320",
                "cylradius": "110",
                "cylheight": "290",
                "showValue": "0",             // Show the numeric value
                "animation": "1",             // Enable animation
                "refreshInstantly": "0",      // Animate the change (not instantly jump)
                "refreshInterval": "1",
                "animationDuration": "2", // Set the duration of each animation
            },
            "value": "1000",
            "annotations": {
                "origw": "400",
                "origh": "290",
                "autoscale": "1",
                "groups": [{
                    "id": "range",
                    "items": [
                        //     {
                        //     "id": "rangeBg",
                        //     "type": "rectangle",
                        //     "x": "$canvasCenterX-75",
                        //     "y": "$chartEndY-40",
                        //     "tox": "$canvasCenterX +55",
                        //     "toy": "$chartEndY-80",
                        //     "fillcolor": "#35d1fd"
                        // }, 
                        // {
                        //     "id": "rangeText",
                        //     "type": "Text",
                        //     "fontSize": "20",
                        //     "fillcolor": "#333333",
                        //     "text": "Loading...",
                        //     "x": "$chartCenterX-60",
                        //     "y": "$chartEndY-60"
                        // }
                    ]
                }]
            }

        },
        "events": {
            "rendered": function (evtObj, argObj) {

                evtObj.sender.chartInterval = setInterval(function () {
                    evtObj.sender.feedData && evtObj.sender.feedData("&value=");
                }, 2000);
            },
            /* Using real time update event to update the annotation */

            //showing available volume in tank (setting colors as per available volume)
            "realTimeUpdateComplete": function (evt, arg) {
                var annotations = evt.sender.annotations,
                    dataVal = evt.sender.getData(),
                    colorVal = (dataVal >= 600) ? "#6caa03" : ((dataVal <= 300) ? "#e44b02" : "#f8bd1b");
                //Updating the volume value
                annotations && annotations.update('rangeText', {
                    "text": "Available Volume: " + dataVal + " ltrs"
                });
                //setting background color of annotation as per value
                annotations && annotations.update('rangeBg', {
                    "fillcolor": colorVal
                });

            },
            "disposed": function (evt, arg) {
                clearInterval(evt.sender.chartInterval);
            }
        }
    }
    );

    chartObj.render();
});


//Ground Level Tank
FusionCharts.ready(function () {
    var chartObj = new FusionCharts({
        type: 'cylinder',
        dataFormat: 'json',
        renderAt: 'chart-container1',
        width: '100%',
        height: '370',
        dataSource: {
            "chart": {
                "theme": "fusion",
                bgColor: "#F7FAFF",        // Background color
                "baseFont": "Rubik",         // Custom font
                // "baseFontSize": "14",         // Font size (optional)
                "baseFontColor": "#000",   // Font color (optional)
                "caption": "",
                "subcaption": "",
                "lowerLimit": "0",
                "upperLimit": "5000",
                "lowerLimitDisplay": "0 ltrs",
                "upperLimitDisplay": "5000 ltrs",
                "numberSuffix": " ltrs",
                "showValue": "1",
                "chartBottomMargin": "45",
                "showValue": "0",
                "refreshInterval": "1",
                "refreshInstantly": "1",
                "cylFillColor": "#35d1fd,#0f75bc",
                "cyloriginx": "300",
                "cyloriginy": "300",
                "cylradius": "290",
                "cylheight": "250",
                "showValue": "0",             // Show the numeric value
                "animation": "1",             // Enable animation
                "refreshInstantly": "0",      // Animate the change (not instantly jump)
                "refreshInterval": "1",
                "animationDuration": "2", // Set the duration of each animation
            },
            "value": "2250",
            "annotations": {
                "origw": "400",
                "origh": "290",
                "autoscale": "1",
                "groups": [{
                    "id": "range",
                    "items": [
                        //     {
                        //     "id": "rangeBg",
                        //     "type": "rectangle",
                        //     "x": "$canvasCenterX-75",
                        //     "y": "$chartEndY-40",
                        //     "tox": "$canvasCenterX +55",
                        //     "toy": "$chartEndY-80",
                        //     "fillcolor": "#35d1fd"
                        // }, 
                        // {
                        //     "id": "rangeText",
                        //     "type": "Text",
                        //     "fontSize": "20",
                        //     "fillcolor": "#333333",
                        //     "text": "Loading...",
                        //     "x": "$chartCenterX-60",
                        //     "y": "$chartEndY-60"
                        // }
                    ]
                }]
            }

        },
        "events": {
            "rendered": function (evtObj, argObj) {

                evtObj.sender.chartInterval = setInterval(function () {
                    evtObj.sender.feedData && evtObj.sender.feedData("&value=");
                }, 2000);
            },
            /* Using real time update event to update the annotation */

            //showing available volume in tank (setting colors as per available volume)
            "realTimeUpdateComplete": function (evt, arg) {
                var annotations = evt.sender.annotations,
                    dataVal = evt.sender.getData(),
                    colorVal = (dataVal >= 600) ? "#6caa03" : ((dataVal <= 300) ? "#e44b02" : "#f8bd1b");
                //Updating the volume value
                annotations && annotations.update('rangeText', {
                    "text": "Available Volume: " + dataVal + " ltrs"
                });
                //setting background color of annotation as per value
                annotations && annotations.update('rangeBg', {
                    "fillcolor": colorVal
                });

            },
            "disposed": function (evt, arg) {
                clearInterval(evt.sender.chartInterval);
            }
        }
    }
    );

    chartObj.render();
});

FusionCharts.ready(function () {
    var chartObj = new FusionCharts({
        type: 'cylinder',
        dataFormat: 'json',
        renderAt: 'chart-container2',
        width: '100%',
        height: '370',
        dataSource: {
            "chart": {
                "theme": "fusion",
                "bgColor": "#F7FAFF",
                "baseFont": "Rubik",         // Custom font
                // "baseFontSize": "14",         // Font size (optional)
                "baseFontColor": "#000",   // Font color (optional)
                "caption": "",
                "subcaption": "",
                "lowerLimit": "0",
                "upperLimit": "5000",
                "lowerLimitDisplay": "0 ltrs",
                "upperLimitDisplay": "5000 ltrs",
                "numberSuffix": " ltrs",
                "showValue": "1",
                "chartBottomMargin": "45",
                "showValue": "0",
                "refreshInterval": "1",
                "refreshInstantly": "1",
                "cylFillColor": "#35d1fd,#0f75bc",
                "cyloriginx": "300",
                "cyloriginy": "300",
                "cylradius": "290",
                "cylheight": "250",
                "showValue": "0",             // Show the numeric value
                "animation": "1",             // Enable animation
                "refreshInstantly": "0",      // Animate the change (not instantly jump)
                "refreshInterval": "1",
                "animationDuration": "2", // Set the duration of each animation
            },
            "value": "5000",
            "annotations": {
                "origw": "400",
                "origh": "290",
                "autoscale": "1",
                "groups": [{
                    "id": "range",
                    "items": [
                        //     {
                        //     "id": "rangeBg",
                        //     "type": "rectangle",
                        //     "x": "$canvasCenterX-75",
                        //     "y": "$chartEndY-40",
                        //     "tox": "$canvasCenterX +55",
                        //     "toy": "$chartEndY-80",
                        //     "fillcolor": "#35d1fd"
                        // }, 
                        // {
                        //     "id": "rangeText",
                        //     "type": "Text",
                        //     "fontSize": "20",
                        //     "fillcolor": "#333333",
                        //     "text": "Loading...",
                        //     "x": "$chartCenterX-60",
                        //     "y": "$chartEndY-60"
                        // }
                    ]
                }]
            }

        },
        "events": {
            "rendered": function (evtObj, argObj) {

                evtObj.sender.chartInterval = setInterval(function () {
                    evtObj.sender.feedData && evtObj.sender.feedData("&value=");
                }, 2000);
            },
            /* Using real time update event to update the annotation */

            //showing available volume in tank (setting colors as per available volume)
            "realTimeUpdateComplete": function (evt, arg) {
                var annotations = evt.sender.annotations,
                    dataVal = evt.sender.getData(),
                    colorVal = (dataVal >= 600) ? "#6caa03" : ((dataVal <= 300) ? "#e44b02" : "#f8bd1b");
                //Updating the volume value
                annotations && annotations.update('rangeText', {
                    "text": "Available Volume: " + dataVal + " ltrs"
                });
                //setting background color of annotation as per value
                annotations && annotations.update('rangeBg', {
                    "fillcolor": colorVal
                });

            },
            "disposed": function (evt, arg) {
                clearInterval(evt.sender.chartInterval);
            }
        }
    }
    );

    chartObj.render();
});