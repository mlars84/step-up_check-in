googleAuthApp.controller('adminInternController', ['$http','adminInternService', function ($http, adminInternService) {
  console.log('loaded adminInternController');
  const self = this;
  self.internData = [];

  self.getComments = function(){
    console.log("in get comments!");
    self.comments = [];

    return $http({
      method: 'GET',
      url: '/private/getComments'
    }).then(function(response){
      console.log("response from server in get Intern Comments: ", response.data);
      self.comments = response.data;

      return response.data;
    });
  }; // end getData

  self.getCheckbox = function(){
    console.log("in get checkbox!");
    self.checkbox = [];

    return $http({
      method: 'GET',
      url: '/private/getCheckbox'
    }).then(function(response){
      console.log("response from server in get Intern Checkbox: ", response.data);
      self.checkbox = response.data;

      return response.data;
    });
  }; // end getCheckbox

  self.getFlags = function(){
    console.log("in get responses!");
    self.flags = [];
    self.flags1=[];
    flags = [];

    return $http({
      method: 'GET',
      url: '/private/getFlags'
    }).then(function(response){
      console.log("response from server in get Intern Flagged Questions: ", response.data);
      flaggedstudents = response.data;

      // for (var i = 0; i < flaggedstudents.length; i++) {
      //   if (response.data[i].first_name ===
      // }
      // var nameArray = new Set();
      // for (var i = 0; i < self.flags1.length; i++) {
      //     nameArray.add(self.flags1[i].first_name, self.flags[1].last_name);
      // }
      // self.flags = nameArray;
      // console.log(nameArray);
      self.flags = response.data;
      return response.data;
    });
  }; // end getCheckbox

  self.getNumericData = function(){
    console.log("in get responses!");
    self.allData = [];

    return $http({
      method: 'GET',
      url: '/private/getNumericData'
    }).then(function(response){
      console.log("response from server in get Intern Data: ", response.data);
      self.allData = response.data;
      dataready = accumulateResponses(self.allData);

      self.drawChart1(dataready[0]);
      self.drawChart2(dataready[1]);
      self.drawChart3(dataready[2]);
      self.drawChart4(dataready[3]);
      self.drawChart5(dataready[4]);


      return response.data;
    });
  }; // end getNumericData


  var accumulateResponses = function(anarray) {
      var nameArray = new Set();
      for (var i = 0; i < anarray.length; i++) {
          nameArray.add(anarray[i].id);
      }
      var resultArray = [];

      for (var j of nameArray) {
          console.log("this is the aset variable:", j);
          newObject = {
              question_id: j,
              question_text: anarray[j].q_text,
              one: 0,
              two:0,
              three:0,
              four:0,
              five:0
          };
          console.log("new Object at start:", newObject);
          for (var k = 0; k < anarray.length; k++) {
              // console.log();
              if (anarray[k].id === j && anarray[k].response_num === 1) {
                  newObject.one += 1;
              }
              if (anarray[k].id === j && anarray[k].response_num === 2) {
                  newObject.two += 1;
              }
              if (anarray[k].id === j && anarray[k].response_num === 3) {
                  newObject.three += 1;
              }
              if (anarray[k].id === j && anarray[k].response_num === 4) {
                  newObject.four += 1;
              }
              if (anarray[k].id === j && anarray[k].response_num === 5) {
                  newObject.five += 1;
              }

          }
          console.log(newObject);
          resultArray.push(newObject);
      }
      console.log("Final array: ", resultArray);
      return resultArray;
  };





self.drawChart1 = function(theObject){

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [{
            label: '# of responses',
            data: [theObject.one, theObject.two, theObject.three, theObject.four, theObject.five],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      title: {
            display: true,
            text: theObject.question_text
        },
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
};

self.drawChart2 = function(theObject){

var ctx = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [{
            label: '# of responses',
            data: [theObject.one, theObject.two, theObject.three, theObject.four, theObject.five],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      title: {
            display: true,
            text: theObject.question_text
        },
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
};

self.drawChart3 = function(theObject){

var ctx = document.getElementById("myChart3").getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [{
            label: '# of responses',
            data: [theObject.one, theObject.two, theObject.three, theObject.four, theObject.five],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      title: {
            display: true,
            text: theObject.question_text
        },
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
};

self.drawChart4 = function(theObject){

var ctx = document.getElementById("myChart4").getContext('2d');
var myChart4 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [{
            label: '# of responses',
            data: [theObject.one, theObject.two, theObject.three, theObject.four, theObject.five],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      title: {
            display: true,
            text: theObject.question_text
        },
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
};

self.drawChart5 = function(theObject){

var ctx = document.getElementById("myChart5").getContext('2d');
var myChart4 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [{
            label: '# of responses',
            data: [theObject.one, theObject.two, theObject.three, theObject.four, theObject.five],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      title: {
            display: true,
            text: theObject.question_text
        },
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
};

  self.getComments();
  self.getCheckbox();
  self.getFlags();
  self.getNumericData();
}]); //end adminInternController
