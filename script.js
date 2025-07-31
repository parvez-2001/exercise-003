 let myArray = [];

    function getInput() {
      return document.getElementById("inputValue").value;
    }

    function updateOutput(msg = "") {
      document.getElementById("output").innerHTML =
        msg + "<br>Array: [" + myArray.join(", ") + "]";
    }

    function pushValue() {
      let val = getInput();
      myArray.push(val);
      updateOutput("Pushed: " + val);
    }

    function popValue() {
      let val = myArray.pop();
      updateOutput("Popped: " + val);
    }

    function shiftValue() {
      let val = myArray.shift();
      updateOutput("Shifted: " + val);
    }

    function unshiftValue() {
      let val = getInput();
      myArray.unshift(val);
      updateOutput("Unshifted: " + val);
    }

    function deleteValue() {
      delete myArray[0];
      updateOutput("Deleted element at index 0");
    }

    function concatArray() {
      let val = getInput();
      let newArray = [val, val + "_extra"];
      myArray = myArray.concat(newArray);
      updateOutput("Concatenated with: [" + newArray.join(", ") + "]");
    }

    function filterValues() {
      let filtered = myArray.filter(item => parseInt(item) > 10);
      updateOutput("Filtered (value > 10): [" + filtered.join(", ") + "]");
    }

    function findValue() {
      let val = getInput();
      let found = myArray.find(item => item == val);
      updateOutput("Found: " + (found !== undefined ? found : "Not found"));
    }

    function sortArray() {
      myArray.sort();
      updateOutput("Sorted array");
    }

    function reverseArray() {
      myArray.reverse();
      updateOutput("Reversed array");
    }

    function sliceArray() {
      let sliced = myArray.slice(1, 3);
      updateOutput("Sliced (1 to 3): [" + sliced.join(", ") + "]");
    }

    function spliceArray() {
      let removed = myArray.splice(2, 1);
      updateOutput("Spliced (2, remove 1): Removed [" + removed.join(", ") + "]");
    }

    function toStringArray() {
      updateOutput("Array as String: " + myArray.toString());
    }
