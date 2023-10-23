//#################################################################
//# Javascript Class: LinkParam()
//#       SuperClass:
//#   Class Filename: linkparam.js
//#
//# Author of Class:      Engelbert Niehaus
//# email:                niehaus@uni-landau.de
//# created               undefined
//# last modifications    2017/11/14 11:11:20
//# GNU Public License V3 - OpenSource
//#
//# created with JavaScript Class Creator JSCC
//#     https://niebert.github.io/JavascriptClassGenerator
//#################################################################

//---------------------------------------------------------------------
//---Store File in Subdirectory /js and import this Class in HTML-File with
// SCRIPT-Tag:  LANGUAGE="JavaScript" SRC="js/linkparam.js"
//---------------------------------------------------------------------
//---Constructor of Class LinkParam()
// Call the constructor for creating an instance of class LinkParam
// by the following command in HTML-file that imports this class
// var vMyInstance = new LinkParam();
//---------------------------------------------------------------------
//----Attributes-------------------------------------------------------
//---------------------------------------------------------------------
// If you want to access the attributes of LinkParam, use
// the attribute name with a leading "this." in the definition of method of LinkParam, e.g.
// this.aName = "Hello World";
//---------------------------------------------------------------------
//----Methods----------------------------------------------------------
//---------------------------------------------------------------------
// (1) If you want to assign definitions of methods for single instance of the class 'LinkParam'
// they are defined with
//    this.my_method = function (pPar1,pPar2)
// this approach allows to overwrite the method definition of single instances dynamically.
//---------------------------------------------------------------------
// (2) A prototype definition of methods for 'LinkParam' will be set by
// use the method's name and extend it with 'LinkParam'.
//    LinkParam.prototype.my_method = function (pPar1,pPar2)
// This approach consumes less memory for instances.
//---------------------------------------------------------------------

	// no superclass defined


function LinkParam () {
	// no superclass defined

    //---------------------------------------------------------------------
    //---Attributes of Class "LinkParam()"
    //---------------------------------------------------------------------
	//---PUBLIC: size (Integer): Counts the Number of Parameter
	this.size = 0;
	//---PUBLIC: aVars (Hash): Attribute: 'aVars' Type: 'Hash' stores all URL parameters
	this.aVars = {};
	//---PUBLIC: aLink (String): Attribute: 'aLink' Type: 'String' stores the Link before '?'
	this.aLink = "";

    //---------------------------------------------------------------------
    //---Methods of Class "LinkParam()"
    //---------------------------------------------------------------------
	//----PUBLIC Method: LinkParam.init(pDoc:Document)-----
	// init(pDoc)
	//	init extract the link with parameters from document.location.search and store aLink
	//----PUBLIC Method: LinkParam.parseURL(pLink:String):String-----
	// parseURL(pLink)  Return: String
	//	parses the URL stores the variables in 'aVar' e.g. ..&lastname=Niehaus&... stores aVars['name']='Niehaus'
	//----PUBLIC Method: LinkParam.getURL(pVarHash:Hash):String-----
	// getURL(pVarHash)  Return: String
	//	Comment for getLink
	//----PUBLIC Method: LinkParam.setValue(pVar:String,pValue:String)-----
	// setValue(pVar,pValue)
	//	Comment for setValue
	//----PUBLIC Method: LinkParam.getValue(pVar:String):String-----
	// getValue(pVar)  Return: String
	//	Comment for getValue(pVar) return the definition of the parameter exists otherwise en empty string
	//----PUBLIC Method: LinkParam.deleteValue(pVar:String)-----
	// deleteValue(pVar)
	//	Comment for deleteValue in the parameter hash aVars
	//	return a Boolean if delete was sucessful, resp. variable pVar exists in Hash aVars
	//----PUBLIC Method: LinkParam.getLink4URL():String-----
	// getLink4URL()  Return: String
	//	get the Link part of the URL without the URL parameters
	//----PUBLIC Method: LinkParam.getParam4URL():String-----
	// getParam4URL()  Return: String
	//	get the parameter string for the URL starting with ? if aVars contains variables
	//----PUBLIC Method: LinkParam.decodeParam(pParam:String):String-----
	// decodeParam(pParam)  Return: String
	//	decode a parameter from the URL
	//----PUBLIC Method: LinkParam.encodeParam(pParam:String)-----
	// encodeParam(pParam)
	//	encode a parameter for a call from the app.
	//----PUBLIC Method: LinkParam.getTableHTML():String-----
	// getTableHTML()  Return: String
	//	creates a HTML table with two column for key and value of the parameter hash aVars
	//----PUBLIC Method: LinkParam.getEditTableHTML(pPrefixID:String):String-----
	// getEditTableHTML(pPrefixID)  Return: String
	//	creates a Edit HTML table with two column for key and value of the parameter hash aVars.
	//	The keys of aVars are used as IDs for the HTML form.
	//	An optional ID prefix as parameter can be used to create a unique ID for the DOM elements
	//	All parameters are visible in an input field.
	//----PUBLIC Method: LinkParam.calcSize()-----
	// calcSize()
	//	calculates the number of variables defined in the URL parameters, stores result in length
	//----PUBLIC Method: LinkParam.encodeHTML(pValue:String,pWrapCode:Boolean):String-----
	// encodeHTML(pValue,pWrapCode)  Return: String
	//	Encodes source code for HTML-Output in as code or textarea in the following way:
	//	 1) Replace "&" character with "&amp;"
	//	 2) Replace "<" character with "&lt;"
	//	 3) Replace ">" character with "&gt;"
	//	The converted pValue will wrapped with <pre> and <code> tags for direct display as HTML
	//	and without code tag wrapper if the code is written as inner HTML and value to a textarea.
	//----PUBLIC Method: LinkParam.exists(pVar:String):Boolean-----
	// exists(pVar)  Return: Boolean
	//	checks if the parameter with variable 'pVar' exists in parameter hash this.aVars
	//----PUBLIC Method: LinkParam.param2DOM(pLinkID:String,pDOMID:String,pOutType:String)-----
	// param2DOM(pLinkID,pDOMID,pOutType)
	//	param2DOM(pLinkID,pDOMID) read the Link Parameter of the pLinkID if exists and
	//	- (html) writes the content to innerHTML (pOutType='html') of DOM node pDOMID or
	//	- (val) writes the content to the value of the HTML input object with the ID pDOMID



}
//-------------------------------------------------------------------------
//---END Constructor of Class "LinkParam()"
//-------------------------------------------------------------------------

//
//#################################################################
//# PUBLIC Method: init()
//#    used in Class: LinkParam
//# Parameter:
//#    pDoc:Document
//# Comment:
//#    init extract the link with parameters from document.location.search and store aLink
//#
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.init = function (pDoc) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: init(pDoc:Document)");
  // alert("js/linkparam.js - Call: init(pDoc:Document)");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.init(pDoc);
  //-------------------------------------------------------

  //save "document" object in aDoc as Attribute for further use
  this.aDoc = pDoc;
  this.aLink = pDoc.location;
  this.aVars = this.parseURL(pDoc.location.search);

};
//----End of Method init Definition


//#################################################################
//# PUBLIC Method: parseURL()
//#    used in Class: LinkParam
//# Parameter:
//#    pLink:String
//# Comment:
//#    parses the URL stores the variables in 'aVar' e.g. ..&lastname=Niehaus&... stores aVars['name']='Niehaus'
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.parseURL = function (pLink) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: parseURL(pLink:String):String");
  // alert("js/linkparam.js - Call: parseURL(pLink:String):String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.parseURL(pLink);
  //-------------------------------------------------------

  var vLink = pLink || "";
  var vParams = {},
      vTokens,
      vRE = /[?&]?([^=]+)=([^&]*)/g;
  if (vLink != "") {
    vLink = vLink.split('+').join(' ');
    while (vTokens = vRE.exec(vLink)) {
      vParams[this.decodeParam(vTokens[1])] = this.decodeParam(vTokens[2]);
      this.calcSize();
    };
  } else {
      console.log("parseURL(pLink) - pLink contains no parameters")
  };
  return vParams;

};
//----End of Method parseURL Definition


//#################################################################
//# PUBLIC Method: getURL()
//#    used in Class: LinkParam
//# Parameter:
//#    pVarHash:Hash
//# Comment:
//#    Comment for getLink
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.getURL = function (pVarHash) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: getURL(pVarHash:Hash):String");
  // alert("js/linkparam.js - Call: getURL(pVarHash:Hash):String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.getURL(pVarHash);
  //-------------------------------------------------------

  var vParam = "";
  if (pVarHash) {
      vParam = this.getParam4URL(pVarHash);
  } else {
      vParam = this.getParam4URL();
  };
  return this.getLink4URL() + vParam;

};
//----End of Method getURL Definition


//#################################################################
//# PUBLIC Method: setValue()
//#    used in Class: LinkParam
//# Parameter:
//#    pVar:String
//#    pValue:String
//# Comment:
//#    sets the value of a link parameter, this is useful
//#    when a parameter for URL are generated from the link parameters
//#    defined in LinkParam
//# created
//# last modifications
//#################################################################

LinkParam.prototype.setValue = function (pVar,pValue) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: setValue(pVar:String,pValue:String)");
  // alert("js/linkparam.js - Call: setValue(pVar:String,pValue:String)");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.setValue(pVar,pValue);
  //-------------------------------------------------------

  if (this.aVars.hasOwnProperty(pVar)) {
    console.log("Value of link parameter '"+pVar+"' changed");
  } else {
    this.calcSize();
    console.log("New  link parameter '"+pVar+"' created");
  };
  this.aVars[pVar] = pValue

};
//----End of Method setValue Definition


//#################################################################
//# PUBLIC Method: getValue()
//#    used in Class: LinkParam
//# Parameter:
//#    pVar:String
//# Comment:
//#    Comment for getValue(pVar) return the definition of the parameter exists otherwise en empty string
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.getValue = function (pVar) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: getValue(pVar:String):String");
  // alert("js/linkparam.js - Call: getValue(pVar:String):String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.getValue(pVar);
  //-------------------------------------------------------

  var vRet = "";
  if (this.aVars.hasOwnProperty(pVar)) {
      vRet = this.aVars[pVar]
  } else {
      console.log("ERROR: variable '"+pVar+"' does not exist in LinkParam");
  };
  return vRet;

};
//----End of Method getValue Definition


//#################################################################
//# PUBLIC Method: deleteValue()
//#    used in Class: LinkParam
//# Parameter:
//#    pVar:String
//# Comment:
//#    Comment for deleteValue in the parameter hash aVars
//#    return a Boolean if delete was sucessful, resp. variable pVar exists in Hash aVars
//#
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.deleteValue = function (pVar) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: deleteValue(pVar:String)");
  // alert("js/linkparam.js - Call: deleteValue(pVar:String)");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.deleteValue(pVar);
  //-------------------------------------------------------

  var vRet = false;
  if (this.aVars.hasOwnProperty(pVar)) {
      delete this.aVars[pVar];
      vRet = true;
      this.calcSize();
  };
  return vRet;

};
//----End of Method deleteValue Definition


//#################################################################
//# PUBLIC Method: getLink4URL()
//#    used in Class: LinkParam
//# Parameter:
//#
//# Comment:
//#    get the Link part of the URL without the URL parameters
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.getLink4URL = function () {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: getLink4URL():String");
  // alert("js/linkparam.js - Call: getLink4URL():String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.getLink4URL();
  //-------------------------------------------------------

  return this.aLink;

};
//----End of Method getLink4URL Definition


//#################################################################
//# PUBLIC Method: getParam4URL()
//#    used in Class: LinkParam
//# Parameter:
//#
//# Comment:
//#    get the parameter string for the URL starting with ? if aVars contains variables
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.getParam4URL = function () {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: getParam4URL():String");
  // alert("js/linkparam.js - Call: getParam4URL():String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.getParam4URL();
  //-------------------------------------------------------

	  var vHash = this.aVars || {};
	  var vOut = "";
	  var vSep = "?";
	  for (var iID in vHash) {
	    if (vHash.hasOwnProperty(iID)) {
        vOut += vSep + this.encodeParam(iID) + "=" + this.encodeParam(vHash[iID]);
	      vSep = "&";
	    };
	  };
	  return vOut;

};
//----End of Method getParam4URL Definition


//#################################################################
//# PUBLIC Method: decodeParam()
//#    used in Class: LinkParam
//# Parameter:
//#    pParam:String
//# Comment:
//#    decode a parameter from the URL
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.decodeParam = function (pParam) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: decodeParam(pParam:String):String");
  // alert("js/linkparam.js - Call: decodeParam(pParam:String):String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.decodeParam(pParam);
  //-------------------------------------------------------

  pParam = pParam.replace(/\+/g,  " ");
  pParam = decodeURIComponent(pParam);
  return pParam;


};
//----End of Method decodeParam Definition


//#################################################################
//# PUBLIC Method: encodeParam()
//#    used in Class: LinkParam
//# Parameter:
//#    pParam:String
//# Comment:
//#    encode a parameter for a call from the app.
//#
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.encodeParam = function (pParam) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: encodeParam(pParam:String)");
  // alert("js/linkparam.js - Call: encodeParam(pParam:String)");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.encodeParam(pParam);
  //-------------------------------------------------------

  var vParam = encodeURIComponent(pParam);
  vParam = vParam.replace(/'/g,"%27").replace(/"/g,"%22");
  return vParam;

};
//----End of Method encodeParam Definition


//#################################################################
//# PUBLIC Method: getTableHTML()
//#    used in Class: LinkParam
//# Parameter:
//#
//# Comment:
//#    creates a HTML table with two column for key and value of the parameter hash aVars
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.getTableHTML = function () {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: getTableHTML():String");
  // alert("js/linkparam.js - Call: getTableHTML():String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.getTableHTML();
  //-------------------------------------------------------

  var vOut = "";
  var vHash = this.aVars;
  vOut += "<table border=1>";
  vOut += "<tr><td><b>Variable</b></td><td>Value</td></tr>";
  var vWrapCode = true;
  for (var iID in vHash) {
      if (vHash.hasOwnProperty(iID)) {
        vOut += "<tr>";
        vOut += "<td>";
        vOut += "<b>"+iID+"</b>";
        vOut += "</td>";
        vOut += "<td>";
        // second parameter vWrapCode = true for non textarea use;
        vOut += this.encodeHTML(vHash[iID],vWrapCode);
        vOut += "</td>";
        vOut += "</tr>";
      };
  };
  vOut += "</table>";
  return vOut;

};
//----End of Method getTableHTML Definition


//#################################################################
//# PUBLIC Method: getEditTableHTML()
//#    used in Class: LinkParam
//# Parameter:
//#    pPrefixID:String
//# Comment:
//#    creates a Edit HTML table with two column for key and value of the parameter hash aVars.
//#    The keys of aVars are used as IDs for the HTML form.
//#    An optional ID prefix as parameter can be used to create a unique ID for the DOM elements
//#    All parameters are visible in an input field.
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.getEditTableHTML = function (pPrefixID) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: getEditTableHTML(pPrefixID:String):String");
  // alert("js/linkparam.js - Call: getEditTableHTML(pPrefixID:String):String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.getEditTableHTML(pPrefixID);
  //-------------------------------------------------------

  var vPrefixID = pPredixID || "";
  var vOut = "";
  var vHash = this.aVars;
  vOut += "<table border=1>";
  var vRows = 1;
  var vContent = "";
  var vMaxRows = 10;
  var vWrapCode = false;
  for (var iID in vHash) {
      if (vHash.hasOwnProperty(iID)) {
        vContent = this.encodeHTML(vHash[iID],vWrapCode);
        vRows = (vHash[iID].split("\n")).length;
        if (vRows > vMaxRows) {
            vRows = vMaxRows;
        };
        vOut += "<tr>";
        vOut += "<td>";
        vOut += "<b>"+iID+"</b>";
        vOut += "</td>";
        vOut += "<td>";
        // second parameter vWrapCode = true for non textarea use;
        vOut += "<textarea id='"+vPrefix+iID+"'' cols='90' rows='"+vRows+"''>";
        vOut += vContent;
        vOut += "</textarea>";
        vOut += "</td>";
        vOut += "</tr>";
      };
  };
  vOut += "</table>";
  return vOut;

};
//----End of Method getEditTableHTML Definition


//#################################################################
//# PUBLIC Method: calcSize()
//#    used in Class: LinkParam
//# Parameter:
//#
//# Comment:
//#    calculates the number of variables defined in the URL parameters, stores result in length
//#
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.calcSize = function () {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: calcSize()");
  // alert("js/linkparam.js - Call: calcSize()");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.calcSize();
  //-------------------------------------------------------

  var vRet = 0;
  if (this.aVars) {
      var vHash = this.aVars;
      for (var key in vHash) {
          vRet++;
      };
  } else {
      console.log("ERROR: variable '"+pVar+"' does not exist in LinkParam");
  };
  return vRet;

};
//----End of Method calcSize Definition


//#################################################################
//# PUBLIC Method: encodeHTML()
//#    used in Class: LinkParam
//# Parameter:
//#    pValue:String
//#    pWrapCode:Boolean
//# Comment:
//#    Encodes source code for HTML-Output in as code or textarea in the following way:
//#     1) Replace "&" character with "&amp;"
//#     2) Replace "<" character with "&lt;"
//#     3) Replace ">" character with "&gt;"
//#    The converted pValue will wrapped with <pre> and <code> tags for direct display as HTML
//#    and without code tag wrapper if the code is written as inner HTML and value to a textarea.
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.encodeHTML = function (pValue,pWrapCode) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: encodeHTML(pValue:String,pWrapCode:Boolean):String");
  // alert("js/linkparam.js - Call: encodeHTML(pValue:String,pWrapCode:Boolean):String");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.encodeHTML(pValue,pWrapCode);
  //-------------------------------------------------------

  var vValue = pValue || "";
  if (vValue != "") {
      vValue = vValue.replace(/</g,"&lt;");
      vValue = vValue.replace(/>/g,"&gt;");
      vValue = vValue.replace(/&/g,"&amp;");
  };
  if (pWrapCode && (pWrapCode == true)) {
      vValue = "<pre><code>"+vValue+"</code></pre>";
  };
  return vValue

};
//----End of Method encodeHTML Definition


//#################################################################
//# PUBLIC Method: exists()
//#    used in Class: LinkParam
//# Parameter:
//#    pVar:String
//# Comment:
//#    checks if the parameter with variable 'pVar' exists in parameter hash this.aVars
//# Return: Boolean
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.exists = function (pVar) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: exists(pVar:String):Boolean");
  // alert("js/linkparam.js - Call: exists(pVar:String):Boolean");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.exists(pVar);
  //-------------------------------------------------------

  var vRet = false;
  if (pVar) {
     vRet = this.aVars.hasOwnProperty(pVar)
  };
  return vRet;


};
//----End of Method exists Definition


//#################################################################
//# PUBLIC Method: param2DOM()
//#    used in Class: LinkParam
//# Parameter:
//#    pLinkID:String
//#    pDOMID:String
//#    pOutType:String
//# Comment:
//#    param2DOM(pLinkID,pDOMID) read the Link Parameter of the pLinkID if exists and
//#    - (html) writes the content to innerHTML (pOutType='html') of DOM node pDOMID or
//#    - (val) writes the content to the value of the HTML input object with the ID pDOMID
//#
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/11/14 11:11:20
//#################################################################

LinkParam.prototype.param2DOM = function (pLinkID,pDOMID,pOutType) {
  //----Debugging------------------------------------------
  // console.log("js/linkparam.js - Call: param2DOM(pLinkID:String,pDOMID:String,pOutType:String)");
  // alert("js/linkparam.js - Call: param2DOM(pLinkID:String,pDOMID:String,pOutType:String)");
  //----Create Object/Instance of LinkParam----
  //    var vMyInstance = new LinkParam();
  //    vMyInstance.param2DOM(pLinkID,pDOMID,pOutType);
  //-------------------------------------------------------

  var vOutType = pOutType || "html";
  if (this.exists(pLinkID)) {
      var vDOMID = pDOMID || pLinkID; // vDOMID is set by parameter pLinkID otherwise pDOMID == pLinkID;
      var vOutDOM = document.getElementById(vDOMID);
      if (vOutDOM) {
          if (vOutType == "html") {
              vOutDOM.innerHTML = this.getValue(pLinkID);
          } else {
              vOutDOM.value = this.getValue(pLinkID);
          }
      } else {
          console.log("DOM node ["+vDOMID+"] does not exist!")
      }
  } else {
      console.log("pLinkID does not exist in param2DOM-call")
  }


};
//----End of Method param2DOM Definition



//-------------------------------------------
//---End Definition of Class-----------------
// JS Class: LinkParam
//-------------------------------------------
