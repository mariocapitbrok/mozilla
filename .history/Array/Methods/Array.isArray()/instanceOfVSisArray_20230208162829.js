<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  
  <script type="javascript">
    const iframe = document.createElement('iframe')
  document.body.appendChild(iframe)
  const xArray = window.frames[window.frames.length - 1].Array
  const arr = new xArray(1, 2, 3) // [1, 2, 3]

  // Correctly checking for Array
  Array.isArray(arr) // true
  // The prototype of arr is xArray.prototype, which is a
  // different object from Array.prototype
  arr instanceof Array // false
  </script>
</body>
</html>


