// first 
document.getElementById('btn-danger').addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato';
    document.getElementById('display').innerText = 'This Tomato Color'
});

// second

document.getElementById('btn-secondary').addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink'
    document.getElementById('display').innerText = 'This is Pink Color'
});
document.getElementById('btn-success').addEventListener('click', function(){
    document.body.style.backgroundColor = 'SkyBlue';
    document.getElementById('display').innerText = 'This is SkyBlue Color';
});
