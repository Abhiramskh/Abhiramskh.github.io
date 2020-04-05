//for the side menu
var toggle=false;
var menubtn=document.getElementsByClassName("btn-toggle-nav")[0];
menubtn.onclick=function () 
{
	var getside = document.querySelector(".nav-side");
	var getsideul = document.querySelector(".nav-side ul");
	var getsidetitle = document.querySelector(".nav-side span");
	var getside = document.querySelector(".nav-side");
	var getsidelink = document.querySelectorAll(".nav-side a");

	if(!toggle)
	{
		getsideul.style.visibility="visible";
		getside.style.width = "200px";
		toggle=true;
	}
	else
	{
		getsideul.style.visibility="hidden";
		getside.style.width = "60px";
		toggle=false;
	}
};
//for the image 
var sampleimages=[	"https://tonedeaf.thebrag.com/wp-content/uploads/2018/09/breaking-bad-768x396.jpg",
					"https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/zdbd1iyonfafehsejivv/breaking-bad",
				  	"https://i.insider.com/5d7f91ed6f24eb3d3e33cc05?width=1100&format=jpeg&auto=webp",
				  	"https://images7.alphacoders.com/617/617964.jpg",
				  	"https://c4.wallpaperflare.com/wallpaper/244/647/743/breaking-bad-bryan-cranston-heisenberg-methamphetamine-wallpaper-preview.jpg"];
var getimg=document.getElementsByTagName("img")[0];
var c=0;
var cngimg=function(){
	getimg.setAttribute("src",sampleimages[c]);
	c++;
	if(c>=sampleimages.length)
		c=0;

}
setInterval(cngimg,3000);



