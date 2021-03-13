chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    var rickRollURLS = localStorage.getItem("blockedURLS").split("{}")
    if (rickRollURLS.includes(tab.url)) {
      chrome.tabs.update(tab.id, {url: "https://antirickroll.softsquirrel.tk/"});
    }
  }
});



document.addEventListener('DOMContentLoaded', function() {
  var submitButtonn = document.getElementById('submitButton');
  submitButtonn.addEventListener('click', function(err) {
      var newURL = document.getElementById("newURL").value;
      localStorage.setItem("blockedURLS", localStorage.getItem("blockedURLS") + "{}" + newURL);
      document.getElementById("newURL").value = "";
  });
  //=======================================================================================================


  var submitButtonn = document.getElementById('RM_URL_BUTTON');

  submitButtonn.addEventListener('click', function(err) {

      var removedURL = document.getElementById("removeURL").value;
      if (localStorage.getItem("blockedURLS").includes("{}" + removedURL)) {
        var arrayWithoutBlockedURL = localStorage.getItem("blockedURLS").replace(("{}" + removedURL), "")
        localStorage.setItem("blockedURLS", arrayWithoutBlockedURL)
        document.getElementById("removeURL").value = "";
      }
      if (removedURL == "https://www.youtube.com/watch?v=dQw4w9WgXcQ") {
        document.getElementById("removeURL").value = "you may not delete the first link.";
      }
      else {
        document.getElementById("removeURL").value = "INVALID URL!";
      }
  });

});

if (localStorage.getItem("blockedURLS") === null) {
  localStorage.setItem("blockedURLS", "https://www.youtube.com/watch?v=dQw4w9WgXcQ{}https://www.youtube.com/watch?v=iik25wqIuFo{}https://www.youtube.com/watch?v=j5a0jTc9S10&t=1s{}https://www.youtube.com/watch?v=oHg5SJYRHA0")
}


var blockedurlList = localStorage.getItem("blockedURLS");



//100% of the lines 58-83 are definitely not copied from stack overflow
var options = [
  set0 = blockedurlList.split("{}"),
  set1 = ['First Option','Second Option','Third Option']
];

function makeUL(array) {
// Create the list element:
var list = document.createElement('ul');

for (var i = 0; i < array.length; i++) {
  // Create the list item:
  var item = document.createElement('li');

  // Set its contents:
  item.appendChild(document.createTextNode(array[i]));

  // Add it to the list:
  list.appendChild(item);
}

// Finally, return the constructed list:
return list;
}

// Add the contents of options[0] to #foo:
document.getElementById('listBlockedURLS').appendChild(makeUL(options[0]));