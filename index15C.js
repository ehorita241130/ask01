/*堀
######################################################################
File: "index15C.js".
On nepi40 : (*home-common="/cygdrive/h/home2/"):
(concat *home-common 
  "js/tests/132/"
  "index15C.js")
By Horita.
On (2024 Nov 15).
######################################################################
CROSS-REFS:

init()
-> loadFile()
   -> fReaderOnLoad
      -> asJson()
      -> obj
      -> obj2
      -> obj3
*/
//**********************************************************************
let obj1 = [];//New
let obj2 = [];//New2
let obj3 = [];//New3
//======================================================================
let elmData1 = undefined;//New4
let elmData1B = undefined;//New4
let elmData2 = undefined;//New4
let elmData2B = undefined;//New4
let elmData3 = undefined;//New4
let elmData3B = undefined;//New4
//**********************************************************************
let trcFlg = false;//New
let trcLev = 1;//New
//**********************************************************************
function init(){//<2
  obj1 = obj0["author"];
  obj2 = obj0["paper"]; 
  obj3 = obj0["auth_pap_rel"]; 
  //
  elmData1 = document.getElementById('data1');//Mdf
  elmData1B = document.getElementById('data1B');//Mdf
  elmData2 = document.getElementById('data2');
  elmData2B = document.getElementById('data2B');
  elmData3 = document.getElementById('data3');
  elmData3B = document.getElementById('data3B');
  let lgt1 = obj1.length;
  let lgt2 = obj2.length;
  let lgt3 = obj3.length;
  console.log(`-- init()#1:lgt1=${lgt1},lgt2=${lgt2},lgt3=${lgt3}`);
};//2>
//**********************************************************************
function asJson(txt){//<1
  let obj = JSON.parse(txt);
  return obj;
}//1>
//**********************************************************************
//**********************************************************************
function getNames_(id){
  let lgt = obj1.length;
  let names = [];//Mdf
  for(let k = 0; k < lgt; ++k){//<2.__________________________________BGN <LOOP.1>
    let entry = obj1[k];
    if( trcLev >= 2 ){//<3
      console.log(`-- getNames()#2A:k=${k}, entry=`);
      console.dir(entry);
    }//3>
    let id1 = entry['id'];
    if( trcLev >= 2 ){//<3
      console.log(`-- getNames()#2B:k=${k}, id1=${id1}`);//Dummy  
    }//3>
    if( id1 === id ){//<3
      names.push(entry['name']);//New
    }//3>
  }//2>.______________________________________________________________END <LOOP.1>
  return names;
}
//**********************************************************************
function getNames(){//<1
  let elmId = document.getElementById('id');
  let idTxt = elmId.value;
  console.log(`-- getNames()#1:idTxt=${idTxt}`);//Dummy
  let id = parseInt(idTxt);
  let names = getNames_(id);//New
  console.log(`-- getNames()#3:names=${names}`);//Dummy
  elmData1.innerText = `${id}：`+JSON.stringify(names);//New2
}//1>
//**********************************************************************
//**********************************************************************
//On 2024_12_6.
function getAuthors_(paperId){//<1
  if( trcLev >= 2 ){
    console.log(`-- getAuthors_()#1B:paperId=${paperId}`);//Dummy
  }
  let lgt = obj3.length;
  let entries = [];//Mdf
  for(let k = 0; k < lgt; ++k){//<2.__________________________________BGN <LOOP.1>
    let entry = obj3[k];
    if( trcLev >= 2 ){//<3
      console.log(`-- getAuthors_()#2A:k=${k}, entry=`);
      console.dir(entry);
    }//3>
    let paperId1 = entry['paperId'];
    if( trcLev >= 2 ){//<3
      console.log(`-- getAuthors_()#2B:k=${k}, paperId1=${paperId1}`);//Dummy  
    }//3>
    if( paperId1 === paperId ){//<3
      entries.push(entry);//New
    }//3>
  }//2>.______________________________________________________________END <LOOP.1>
  return entries;
}//1>
//**********************************************************************
//On 2024_11_24.
function getAuthors(){//<1
  let elmId = document.getElementById('paperId2');
  let idTxt = elmId.value;
  console.log(`-- getAuthors()#1:idTxt=${idTxt}`);//Dummy
  let paperId = parseInt(idTxt);
  console.log(`-- getAuthors()#1B:paperId=${paperId}`);//Dummy
  let entries = getAuthors_(paperId);
  console.log(`-- getAuthors()#3:entries=${entries}`);//Dummy
  let htmlText = '';
  let lgt1 = entries.length;  
  for(let k = 0; k < lgt1; ++k){//<2._________________________________BGN <LOOP.1>
    let entry = entries[k];
    htmlText += JSON.stringify(entry) + '<br/>';
  }//>2.______________________________________________________________END <loop.1> 
  elmData3B.innerHTML = htmlText;//Mdf
}//1>
//**********************************************************************
//On 2024_12_6.
function detailed3B(){//<1
  let elmId = document.getElementById('paperId2');
  let idTxt = elmId.value;
  console.log(`-- detailed3B()#1:idTxt=${idTxt}`);//Dummy
  let paperId = parseInt(idTxt);
  console.log(`-- detailed3B()#1B:paperId=${paperId}`);//Dummy
  let entries = getAuthors_(paperId);
  if( trcLev >= 2 ){
    console.log(`-- detailed3B()#3:entries=${entries}`);//Dummy
  }
  let htmlText = '';
  let lgt1 = entries.length;  
  for(let k = 0; k < lgt1; ++k){//<2._________________________________BGN <LOOP.1>
    let entry = entries[k];
    let authorId = entry.authorId;
    let names = getNames_(authorId);
    if( trcLev >= 2 ){
      console.log('-- detailed3B()#4: names='); console.dir(names);//Test
    }
    htmlText += `#${k+1}：` + JSON.stringify(names) + '<br/>';
    //htmlText += JSON.stringify(authorId) + '<br/>';
  }//>2.______________________________________________________________END <loop.1> 
  elmData3B.innerHTML = htmlText;//Mdf
}//1>
//**********************************************************************
//**********************************************************************
//On 2024_12_7.
function detailed2_(id){//<1
  let papers = getPaper_(id);//New
  if( trcLev >= 2 ){
    console.log('-- detailed2_()#3:papers=');
    console.dir(papers);//Ne2
  }
  let paper = papers[0];//New2
  let paperId = paper.id;//New3
  let authors = getAuthors_(paperId);//New3
  if( trcLev >= 2 ){
    console.log('-- detailed2_()#1:authors='); console.dir(authors);
  }
  let htmlText = '';
  htmlText += JSON.stringify(paper)+'<br/>';//New3
  let lgt1 = authors.length;
  for(let k = 0; k < lgt1; ++k){//<2._________________________________BGN <LOOP.1>
    let authorEntry = authors[k];
    let authorId = authorEntry.authorId;
    let names = getNames_(authorId);
    htmlText += `authorId：${authorId}，`+JSON.stringify(names)+'<br/>';
  }//>2.______________________________________________________________END <loop.1> 
  elmData2.innerHTML = htmlText;
}
//**********************************************************************
//On 2024_12_6.
function detailed2(){//<1
  let elmId = document.getElementById('paperId');
  let idTxt = elmId.value;
  console.log(`-- detailed2()#1:idTxt=${idTxt}`);//Dummy
  let id = parseInt(idTxt);
  detailed2_(id);//New
}//1>
//**********************************************************************
//On 2024_12_6.
function getPaper_(id){//<1
  console.log(`-- getPaper_()#1B:id=${id}`);
  let lgt = obj2.length;
  let papers = [];//Mdf
  for(let k = 0; k < lgt; ++k){//<2.__________________________________BGN <LOOP.1>
    let entry = obj2[k];
    if( trcLev >= 2 ){//<3
      console.log(`-- getPaper_()#2A:k=${k}, entry=`);
      console.dir(entry);
    }//3>
    let id1 = entry['id'];
    if( trcLev >= 2 ){//<3
      console.log(`-- getPaper_()#2B:k=${k}, id1=${id1}`);//Dummy  
    }//3>
    if( id1 === id ){//<3
      console.log(`-- getPaper_()#1C:id=${id}, id1=${id1}`);
      papers.push(entry);//New
      break;//________________________________________________________EXT <LOOP.1>
    }//3>
  }//2>.______________________________________________________________END <LOOP.1>
  return papers;
}//1>
//**********************************************************************
function getPaper(){//<1
  let elmId = document.getElementById('paperId');
  let idTxt = elmId.value;
  console.log(`-- getPaper()#1:idTxt=${idTxt}`);//Dummy
  let id = parseInt(idTxt);
  let papers = getPaper_(id);//New
  console.log('-- getPaper()#3:papers=');
  console.dir(papers);//Ne2
  let paper = papers[0];//New2
  elmData2.innerText = JSON.stringify(paper);//New2
}//1>
//**********************************************************************
//**********************************************************************
//On 2024_12_5.
function getNames2_(namePart){//<1
  let lgt = obj1.length;
  let entries = [];//Mdf
  for(let k = 0; k < lgt; ++k){//<2.__________________________________BGN <LOOP.1>
    let entry = obj1[k];
    if( trcLev >= 2 ){//<3
      console.log(`-- getNames2_()#2A:k=${k}, entry=`);
      console.dir(entry);
    }//3>
    let name1 = entry['name'];
    if( trcLev >= 2 ){//<3
      console.log(`-- getNames2_()#2B:k=${k}, name1=${name1}`);//Dummy  
    }//3>
    if( name1.match(namePart) ){//<3
      entries.push(entry);//New
    }//3>
  }//2>.______________________________________________________________END <LOOP.1>
  console.log('-- getNames2_()#3:entries=');
  console.dir(entries);//Mdf
  return entries;//New
}//1>
//**********************************************************************
//On 2024_11_21.
function getNames2(){//<1
  let elmNamePart = document.getElementById('namePart');
  let namePart = elmNamePart.value;
  console.log(`-- getNames2()#1:namePart=${namePart}`);//Tracing.
  let entries = getNames2_(namePart);//New
  let htmlText = '';
  let lgt1 = entries.length;
  for(let k = 0; k < lgt1; ++k){//<2._________________________________BGN <LOOP.2>
    let entry = entries[k];
    htmlText += JSON.stringify(entry) + '<br/>';
  }//>2.______________________________________________________________END <loop.2> 
  elmData1B.innerHTML = htmlText;
  //elmData1.innerHTML = htmlText;
}//1>
//**********************************************************************
//**********************************************************************
//On 2024_12_5.
function detailedAuthors_(namePart){
  console.log(`-- detailedAuthors_()#1:namePart=${namePart}`);//Tracing.
  let lgt = obj1.length;
  let entries = [];//Mdf
  for(let k = 0; k < lgt; ++k){//<2.__________________________________BGN <LOOP.1>
    let entry = obj1[k];
    if( trcLev >= 2 ){//<3
      console.log(`-- detailedAuthors_()#2A:k=${k}, entry=`);
      console.dir(entry);
    }//3>
    let name1 = entry['name'];
    if( trcLev >= 2 ){//<3
      console.log(`-- detailedAuthors_()#2B:k=${k}, name1=${name1}`);//Dummy  
    }//3>
    if( name1.match(namePart) ){//<3
      let id = entry['id'];
      let entry2 = getNames_(id);
      let entry3 = {"id": id, "names": entry2};
      entries.push(entry3);//New
      //entries.push(entry);//New
    }//3>
  }//2>.______________________________________________________________END <LOOP.1>
  console.log('-- detailedAuthors_()#3:entries=');
  console.dir(entries);//Mdf
  return entries;//New
}
//**********************************************************************
//On 2024_12_5.
function detailedAuthors(){
  let elmNamePart = document.getElementById('namePart');
  let namePart = elmNamePart.value;
  console.log(`-- detailedAuthors()#1:namePart=${namePart}`);//Tracing.
  let entries = detailedAuthors_(namePart);
  let lgt1 = entries.length;
  let htmlText = '';
  for(let k = 0; k < lgt1; ++k){//<2._________________________________BGN <LOOP.2>
    let entry = entries[k];
    htmlText += JSON.stringify(entry) + '<br/>';
  }//>2.______________________________________________________________END <loop.2> 
  elmData1B.innerHTML = htmlText;
}
//**********************************************************************
//**********************************************************************
//On 2024_12_7.
function getPapers_(titlePart){//<1
  let lgt = obj2.length;
  let entries = [];//Mdf
  for(let k = 0; k < lgt; ++k){//<2.__________________________________BGN <LOOP.1>
    let entry = obj2[k];
    if( trcLev >= 2 ){//<3
      console.log(`-- getPapers_()#2A:k=${k}, entry=`);
      console.dir(entry);
    }//3>
    let title1 = entry['title'];
    if( trcLev >= 2 ){//<3
      console.log(`-- getPapers_()#2B:k=${k}, title1=${title1}`);//Tracing
    }//3>
    if( title1.match(titlePart) ){//<3
      entries.push(entry);//New
    }//3>
  }//2>.______________________________________________________________END <LOOP.1>
  if( trcLev >= 2 ){//<2
    console.log('-- getPapers_()#3:entries=');
    console.dir(entries);//Mdf
  }//2>
  return entries;
}//1>
//**********************************************************************
//On 2024_11_23.
function getPapers(){//<1
  let elmTitlePart = document.getElementById('titlePart');
  let titlePart = elmTitlePart.value;
  console.log(`-- getPapers()#1:titlePart=${titlePart}`);//Tracing.
  let lgt = obj2.length;
  let entries = getPapers_(titlePart);//New
  if( trcLev >= 2 ){//<2
    console.log('-- getPapers()#3:entries=');
    console.dir(entries);//Mdf
  }//2>
  let htmlText = '';
  let lgt1 = entries.length;
  for(let k = 0; k < lgt1; ++k){//<2._________________________________BGN <LOOP.2>
    let entry = entries[k];
    htmlText += `#${k+1}：` + JSON.stringify(entry) + '<br/>';
  }//>2.______________________________________________________________END <loop.2> 
  elmData2B.innerHTML = htmlText;//Mdf
}//1>
//**********************************************************************
//On 2024_12_7.
function detailed2B(){//<1
  let elmTitlePart = document.getElementById('titlePart');
  let titlePart = elmTitlePart.value;
  console.log(`-- detailed2B()#1:titlePart=${titlePart}`);//Tracing.
  let lgt = obj2.length;
  let entries = getPapers_(titlePart);//New
  if( trcLev >= 2 ){//<2
    console.log('-- detailed2B()#3:entries=');
    console.dir(entries);//Mdf
  }//2>
  let htmlText = '';
  let lgt1 = entries.length;
  for(let k = 0; k < lgt1; ++k){//<2._________________________________BGN <LOOP.1>
    let entry = entries[k];
    htmlText += `#${k+1}：` + JSON.stringify(entry) + '<br/>';
    let paperId = entry.id;
    let authors = getAuthors_(paperId);//New3
    let lgt2 = authors.length;
    for(let k2 = 0; k2 < lgt2; ++k2){//<3.____________________________BGN <LOOP.1.1>
      let authorEntry = authors[k2];
      let authorId = authorEntry.authorId;
      let names = getNames_(authorId);
      htmlText += `　A#${k2+1}：`+`authorId：${authorId}，`+JSON.stringify(names)+'<br/>';
    }//>2.____________________________________________________________END <loop.1.1> 
  }//>2.______________________________________________________________END <loop.1> 
  elmData2B.innerHTML = htmlText;
}//1>
//**********************************************************************
//**********************************************************************
//On 2024_12_6.
function getPapers2_(authorId){//<1
  let lgt = obj3.length;
  let entries = [];//Mdf
  for(let k = 0; k < lgt; ++k){//<2.__________________________________BGN <LOOP.1>
    let entry = obj3[k];
    if( trcLev >= 2 ){//<3
      console.log(`-- getPapers2_()#2A:k=${k}, entry=`);
      console.dir(entry);
    }//3>
    let authorId1 = entry['authorId'];
    if( trcLev >= 2 ){//<3
      console.log(`-- getPapers2_()#2B:k=${k}, authorId1=${authorId1}`);//Dummy  
    }//3>
    if( authorId1 === authorId ){//<3
      if( trcLev >= 2 ){
        console.log(`-- getPapers2_()#1C:authorId=${authorId}, authorId1=${authorId1}`);
      }
      entries.push(entry);//New
      //break;//________________________________________________________EXT <LOOP.1>
    }//3>
  }//2>.______________________________________________________________END <LOOP.1>
  if( trcLev >= 2 ){
    console.log('-- getPapers2_()#3:entries=');
    console.dir(entries);//New2
  }
  return entries;
}//1>
//**********************************************************************
function getPapers2(){//<1
  let elmId = document.getElementById('authorId2');
  let idTxt = elmId.value;
  console.log(`-- getPapers2()#1:idTxt=${idTxt}`);//Dummy
  let authorId = parseInt(idTxt);
  console.log(`-- getPapers2()#1B:authorId=${authorId}`);
  let entries = getPapers2_(authorId);
  let htmlText = '';
  let lgt1 = entries.length;
  for(let k = 0; k < lgt1; ++k){//<2._________________________________BGN <LOOP.2>
    let entry = entries[k];
    htmlText += `#${k+1}：` + JSON.stringify(entry) + '<br/>';
  }//>2.______________________________________________________________END <loop.2> 
  elmData3.innerHTML = htmlText;
}//1>
//**********************************************************************
//On 2024_12_6.
function detailed3(){
  let elmId = document.getElementById('authorId2');
  let idTxt = elmId.value;
  console.log(`-- detailed3()#1:idTxt=${idTxt}`);//Dummy
  let authorId = parseInt(idTxt);
  console.log(`-- detailed3()#1B:authorId=${authorId}`);
  let entries = getPapers2_(authorId);
  let htmlText = '';
  let lgt1 = entries.length;
  for(let k = 0; k < lgt1; ++k){//<2._________________________________BGN <LOOP.2>
    let entry = entries[k];
    let paperId = entry.paperId;
    let papers = getPaper_(paperId);//New
    let paper = papers[0];//New2
    htmlText += `#${k+1}：` + JSON.stringify(paper) + '<br/>';
    //htmlText += `#${k+1}：` + JSON.stringify(entry) + '<br/>';
  }//>2.______________________________________________________________END <loop.2> 
  elmData3.innerHTML = htmlText;
}
//**********************************************************************
//On 2024_12_6.
function detailed3A(){
  let elmId = document.getElementById('authorId2');
  let idTxt = elmId.value;
  console.log(`-- detailed3A()#1:idTxt=${idTxt}`);//Dummy
  let authorId = parseInt(idTxt);
  console.log(`-- detailed3A()#1B:authorId=${authorId}`);
  let entries = getPapers2_(authorId);
  let htmlText = '';
  let lgt1 = entries.length;
  for(let k = 0; k < lgt1; ++k){//<2._________________________________BGN <LOOP.2>
    let entry = entries[k];
    let paperId = entry.paperId;
    let papers = getPaper_(paperId);//New
    let paper = papers[0];//New2
    //let authoerId = entry.authorId;
    //let names = getNames_(authoerId);
    htmlText += `#${k+1}：` + JSON.stringify(paper) + '<br/>';
    htmlText += 'Authors：'+'<br/>';//New3
    let authorEntries = getAuthors_(paperId);
    let lgt2 = authorEntries.length;
    for(k2 = 0; k2 < lgt2; ++k2){
      let authPapEntry = authorEntries[k2];
      let authorId = authPapEntry.authorId;
      let authorEntry = getNames_(authorId);
      htmlText += JSON.stringify(authorEntry) + '<br/>';
    }
  }//>2.______________________________________________________________END <loop.2> 
  elmData3.innerHTML = htmlText;
}
//**********************************************************************
//**********************************************************************
function clear1(){
  elmData1.innerHTML = '';
}
//**********************************************************************
//On 2024_12_5.
function clear1B(){
  elmData1B.innerHTML = '';
}
//**********************************************************************
//**********************************************************************
function clear2(){
  elmData2.innerHTML = '';
}
//**********************************************************************
function clear2B(){
  elmData2B.innerHTML = '';
}
//**********************************************************************
//**********************************************************************
function clear3(){
  elmData3.innerHTML = '';
}
//**********************************************************************
function clear3B(){
  elmData3B.innerHTML = '';
}
//**********************************************************************
