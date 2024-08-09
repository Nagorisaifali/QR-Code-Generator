var qrText = document.getElementById('qrtext') ; 
var sizes = document.getElementById('sizes') ; 
var genratebtn = document.getElementById('genratebtn') ; 
var downloadbtn = document.getElementById('downloadbtn') ; 


var qrcontainer = document.querySelector("#qrbody") 
let size = sizes.value ; 
genratebtn.addEventListener('click' , (e)=>{
    e.preventDefault() ; 
    isempty() ;     
}); 


sizes.addEventListener('change',(e)=>{
    size = e.target.value ; 
    isempty() ; 
});

downloadbtn.addEventListener('click' , (e)=>{
    let img =  document.querySelector('#qrbody img') ; 
    
    if(img !== null){
        let imgatrr = img.getAttribute('src') ;
        downloadbtn.setAttribute("href" , imgatrr) ; 
    }else{
        downloadbtn.setAttribute("href" , `${document.querySelector('canvas').toDataURL}`)
    }
})

function isempty(){
    if(qrText.value.length>0){
        genrateqrcode() ; 
    }else{
        alert("Enter the text or URL to generate your QR Code ")
    }
}

function genrateqrcode(){
    qrcontainer.innerHTML = "" ; 
    new QRCode(qrcontainer, {
        text: qrText.value , 
        height: size , 
        width: size , 
        colorLight: '#fff',
        colorDark:'#000',
    });
}
