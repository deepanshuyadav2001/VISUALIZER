import { to_false } from "./PATH";

export default function SHORTEST_PATH(si,sj,di,dj,n,m,matrix,dist,vist,vp) {
const vd_reset=()=>{
    for(let i=0;i<n;i++)
for(let j=0;j<m;j++)
 {dist[i][j]=100;
 vist[i][j]=[-1,-1];}
}

let weight=0;
let x=[0,0,1,-1];
let y=[1,-1,0,0];

var s = new Array();
s.push([0,[si,sj]]);
 while(s.length!=0)
 {   s.sort(function(a, b) {
     return a[0] - b[0];
      });
     var z=s.shift();
     var t1=z[1][0],t2=z[1][1];
     if(t1===di && t2===dj)
     {break;}
     for(let i=0;i<4;i++)
     { let a=x[i],b=y[i];
      
    if(t1+a>=0 && t1+a<n && t2+b>=0 && t2+b<m){
       if(matrix[t1+a][t2+b]!=1000){
        if(dist[t1+a][t2+b]>dist[t1][t2]+matrix[t1+a][t2+b])
         {dist[t1+a][t2+b]=dist[t1][t2]+matrix[t1+a][t2+b];}
        if(vist[t1+a][t2+b][0]===-1){
        s.push([dist[t1+a][t2+b],[t1+a,t2+b]]);
            vist[t1+a][t2+b]=[t1,t2];
            
        } 
     }}}
 }
vist[si][sj]=[-1,-1];
 let i=di,j=dj;
 while(i!=-1)
 { let t1=i,t2=j;
    vp.push([i,j]);
    i=vist[t1][t2][0];
    j=vist[t1][t2][1];}
vp.reverse();
console.log(vp);
if(vp.length===1)
{alert("PATH DOES NOT EXIST");
vd_reset();
to_false();
}
for(let indx=1;indx<vp.length-1;indx++)
{let x=vp[indx][0];   
let y=vp[indx][1];
weight+=matrix[x][y]; 
setTimeout(()=>{
let a=document.getElementById('node-row-'+(x)+'col-'+(y));
if(a!=null){
a.style.backgroundColor = "blue";}
if(indx+1==(vp.length-1))
{setTimeout(()=>{alert("PATH LENGTH IS : "+weight); 
to_false();
vd_reset();},10*indx);
}
},100*indx);
}} 
  

