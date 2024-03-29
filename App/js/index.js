xui.Class('App', 'xui.Module',{
    Instance:{
        events:{
            "onReady":[
                {
                    "desc":"call list API ",
                    "type":"control",
                    "target":"api_list",
                    "args":[],
                    "method":"invoke",
                    "onOK":0,
                    "onKO":1
                }
            ]
        }, 
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_list")
                .setName("api_list")
                .setQueryURL("{xui.constant.request_url}")
                .setResponseCallback([
                    {
                        "type":"host",
                        "name":"refreshGrid"
                    }
                ])
                .setQueryArgs({
                    "key":"DBProcess",
                    "paras":{
                        "action":"getlist"
                    }
                })
                .beforeData([
                    {
                        "desc":"data error handler",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "{args[1].error.message}"
                        ],
                        "method":"alert",
                        "conditions":[
                            {
                                "left":"{args[1].error}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ],
                        "onOK":2,
                        "return":false
                    }
                ])
                .onError([
                    {
                        "desc":"API error handler",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{page.functions.onerror}",
                            undefined,
                            undefined,
                            "{args[1]}"
                        ],
                        "method":"call"
                    }
                ])
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_update")
                .setName("api_update")
                .setDesc("to call update API")
                .setQueryURL("{xui.constant.request_url}")
                .setRequestDataSource([
                    {
                        "type":"form",
                        "name":"con_update",
                        "path":"paras"
                    }
                ])
                .setQueryArgs({
                    "key":"DBProcess",
                    "paras":{
                        "action":"update"
                    }
                })
                .beforeData([
                    {
                        "desc":"data error handler",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "{args[1].error.message}"
                        ],
                        "method":"alert",
                        "conditions":[
                            {
                                "left":"{args[1].error}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ],
                        "onOK":2,
                        "return":false
                    }
                ])
                .onError([
                    {
                        "desc":"API error handler",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{page.functions.onerror}",
                            undefined,
                            undefined,
                            "{args[1]}"
                        ],
                        "method":"call"
                    }
                ])
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_delete")
                .setName("api_delete")
                .setDesc("to call delete API")
                .setQueryURL("{xui.constant.request_url}")
                .setQueryArgs({
                    "key":"DBProcess",
                    "paras":{
                        "action":"delete"
                    }
                })
                .beforeData([
                    {
                        "desc":"data error handler",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "{args[1].error.message}"
                        ],
                        "method":"alert",
                        "conditions":[
                            {
                                "left":"{args[1].error}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ],
                        "onOK":2,
                        "return":false
                    }
                ])
                .onError([
                    {
                        "desc":"API error handler",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{page.functions.onerror}",
                            undefined,
                            undefined,
                            "{args[1]}"
                        ],
                        "method":"call"
                    }
                ])
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_create")
                .setName("api_create")
                .setQueryURL("{xui.constant.request_url}")
                .setRequestDataSource([
                    {
                        "type":"form",
                        "name":"con_create",
                        "path":"paras"
                    }
                ])
                .setQueryArgs({
                    "key":"DBProcess",
                    "paras":{
                        "action":"create"
                    }
                })
                .beforeData([
                    {
                        "desc":"data error handler",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "{args[1].error.message}"
                        ],
                        "method":"alert",
                        "conditions":[
                            {
                                "left":"{args[1].error}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ],
                        "onOK":2,
                        "return":false
                    }
                ])
                .onError([
                    {
                        "desc":"API error handler",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{page.functions.onerror}",
                            undefined,
                            undefined,
                            "{args[1]}"
                        ],
                        "method":"call"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"con_update")
                .setLeft("30em")
                .setTop("10.833333333333334em")
                .setWidth("22.5em")
                .setCaption("Update")
                .setToggleBtn(false)
            );
            
            host.con_update.append(
                xui.create("xui.UI.Input")
                .setHost(host,"iKey")
                .setName("key")
                .setDirtyMark(false)
                .setDisabled(true)
                .setLeft("5.833333333333333em")
                .setTop("0.5em")
                .setWidth("15em")
            );
            
            host.con_update.append(
                xui.create("xui.UI.Input")
                .setHost(host,"iValue")
                .setName("value")
                .setDirtyMark(false)
                .setLeft("5.833333333333333em")
                .setTop("3em")
                .setWidth("15em")
            );
            
            host.con_update.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"btnU")
                .setName("updateButton")
                .setDesc("to trigger update function")
                .setDisabled(true)
                .setLeft("5.833333333333333em")
                .setTop("5.833333333333333em")
                .setWidth("15em")
                .setCaption("Update")
                .onClick([
                    {
                        "desc":"call update API",
                        "type":"control",
                        "target":"api_update",
                        "args":[ ],
                        "method":"invoke",
                        "event":1,
                        "onOK":0,
                        "onKO":1
                    },
                    {
                        "desc":"update grid",
                        "type":"control",
                        "target":"treegrid",
                        "args":[
                            "",
                            "{page.con_update.getFormValues()}"
                        ],
                        "method":"setRowMap",
                        "conditions":[
                            {
                                "left":"{temp.okData}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ]
                    }
                ])
            );
            
            host.con_update.append(
                xui.create("xui.UI.Label")
                .setHost(host,"label23")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("4.166666666666667em")
                .setCaption("key")
            );
            
            host.con_update.append(
                xui.create("xui.UI.Label")
                .setHost(host,"label24")
                .setLeft("0.8333333333333334em")
                .setTop("3.3333333333333335em")
                .setWidth("4.166666666666667em")
                .setCaption("value")
            );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"con_create")
                .setLeft("30em")
                .setTop("22.5em")
                .setWidth("22.5em")
                .setCaption("Create")
                .setToggleBtn(false)
            );
            
            host.con_create.append(
                xui.create("xui.UI.Input")
                .setHost(host,"iKey2")
                .setName("key")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("5.833333333333333em")
                .setTop("0.5em")
                .setWidth("15em")
            );
            
            host.con_create.append(
                xui.create("xui.UI.Input")
                .setHost(host,"iValue2")
                .setName("value")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("5.833333333333333em")
                .setTop("3em")
                .setWidth("15em")
            );
            
            host.con_create.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"btnC")
                .setName("createButton")
                .setDesc("to trigger create function")
                .setLeft("5.833333333333333em")
                .setTop("5.833333333333333em")
                .setWidth("15em")
                .setCaption("Add a new row")
                .onClick([
                    {
                        "desc":"check form first",
                        "type":"control",
                        "target":"con_create",
                        "args":[ ],
                        "method":"checkValid",
                        "event":1
                    },
                    {
                        "desc":"call create API",
                        "type":"control",
                        "target":"api_create",
                        "args":[ ],
                        "method":"invoke",
                        "onOK":0,
                        "onKO":1
                    },
                    {
                        "desc":"add a new row",
                        "type":"control",
                        "target":"treegrid",
                        "args":[
                            "{page.con_create.getFormValues()}",
                            "",
                            "",
                            false
                        ],
                        "method":"insertRows",
                        "conditions":[
                            {
                                "left":"{temp.okData}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ]
                    },
                    {
                        "desc":"clear form",
                        "type":"control",
                        "target":"con_create",
                        "args":[ ],
                        "method":"formClear",
                        "conditions":[
                            {
                                "left":"{temp.okData}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ]
                    },
                    {
                        "desc":"active the last row",
                        "type":"control",
                        "target":"treegrid",
                        "args":[
                            "{-1}"
                        ],
                        "method":"setActiveRow",
                        "timeout":200,
                        "conditions":[
                            {
                                "left":"{temp.okData}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ]
                    }
                ])
            );
            
            host.con_create.append(
                xui.create("xui.UI.Label")
                .setHost(host,"label3")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("4.166666666666667em")
                .setCaption("key")
            );
            
            host.con_create.append(
                xui.create("xui.UI.Label")
                .setHost(host,"label4")
                .setLeft("0.8333333333333334em")
                .setTop("3.3333333333333335em")
                .setWidth("4.166666666666667em")
                .setCaption("value")
            );
            
            append(
                xui.create("xui.UI.Element")
                .setHost(host,"xui_ui_element1")
                .setSpaceUnit("px")
                .setLeft("170px")
                .setTop("10px")
                .setWidth("326px")
                .setHeight("80px")
                .setHtml("<div style=\"text-align: center;\"><font size=\"3\">A CRUD app with CrossUI Front-End Builder&nbsp;</font></div><div style=\"text-align: center;\"><font size=\"3\"><br></font></div><div style=\"text-align: center;\"><font size=\"3\">&nbsp;No Coding Required</font></div>")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block3")
                .setLeft("4.166666666666667em")
                .setTop("8.333333333333334em")
                .setWidth("21.666666666666668em")
                .setHeight("24.166666666666668em")
            );
            
            host.block3.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"treegrid")
                .setDesc("to list all records")
                .setDirtyMark(false)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id":"key",
                        "caption":"Key",
                        "flexSize":true,
                        "width":"6.666666666666667em",
                        "type":"label",
                        "_cells":{ },
                        "_serialId":"-h_a",
                        "_colWidth":"7.083333333333333em",
                        "_cellWidth":"6.666666666666667em",
                        "_hcellheight":"2em",
                        "_region":2
                    },
                    {
                        "id":"value",
                        "caption":"Value",
                        "flexSize":true,
                        "width":"13.333333333333334em",
                        "type":"label",
                        "_cells":{ },
                        "_serialId":"-h_b",
                        "_colWidth":"14.083333333333334em",
                        "_cellWidth":"13.333333333333334em",
                        "_hcellheight":"2em",
                        "_region":2
                    }
                ])
                .afterRowActive([
                    {
                        "desc":"enable update button",
                        "type":"control",
                        "target":"btnD",
                        "args":[ ],
                        "method":"enable"
                    },
                    {
                        "desc":"enable delete button",
                        "type":"control",
                        "target":"btnU",
                        "args":[ ],
                        "method":"enable"
                    },
                    {
                        "desc":"fill form",
                        "type":"control",
                        "target":"con_update",
                        "args":[
                            "{page.treegrid.getRowMap()}"
                        ],
                        "method":"setFormValues"
                    }
                ])
            );
            
            host.block3.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block23")
                .setDock("top")
                .setLeft("9.166666666666666em")
                .setTop("1.6666666666666667em")
                .setHeight("2.5em")
                .setBorderType("none")
            );
            
            host.xui_ui_block23.append(
                xui.create("xui.UI.Span")
                .setHost(host,"xui_ui_span8")
                .setLeft("7.5em")
                .setTop("0.5833333333333334em")
                .setWidth("8.333333333333334em")
                .setHeight("1.4166666666666667em")
                .setHtml("Key/Value Pairs")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"btnD")
                .setName("deleteButton")
                .setDesc("to trigger delete function")
                .setDirtyMark(false)
                .setDisabled(true)
                .setLeft("30em")
                .setTop("8.333333333333334em")
                .setWidth("22.5em")
                .setCaption("Delete the active row")
                .onClick([
                    {
                        "desc":"get the key",
                        "type":"other",
                        "target":"var",
                        "args":[
                            "key",
                            "{page.iKey.getValue()}"
                        ],
                        "method":"temp",
                        "event":1
                    },
                    {
                        "desc":"set api args",
                        "type":"control",
                        "target":"api_delete",
                        "args":[
                            {
                                "queryArgs":{
                                    "key":"DBProcess",
                                    "paras":{
                                        "action":"delete",
                                        "key":"{temp.key}"
                                    }
                                }
                            },
                            { }
                        ],
                        "method":"setProperties"
                    },
                    {
                        "desc":"call delete API",
                        "type":"control",
                        "target":"api_delete",
                        "args":[ ],
                        "method":"invoke",
                        "onOK":0,
                        "onKO":1
                    },
                    {
                        "desc":"remove row from grid",
                        "type":"control",
                        "target":"treegrid",
                        "args":[ ],
                        "method":"removeRows",
                        "event":1,
                        "conditions":[
                            {
                                "left":"{temp.okData}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ]
                    },
                    {
                        "desc":"active the last row",
                        "type":"control",
                        "target":"treegrid",
                        "args":[
                            "{-1}"
                        ],
                        "method":"setActiveRow",
                        "timeout":200,
                        "conditions":[
                            {
                                "left":"{temp.okData}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ]
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Link")
                .setHost(host,"xui_ui_link1")
                .setLeft("8.583333333333334em")
                .setTop("38.583333333333336em")
                .setCaption("[ Click here to see the tutorial ]")
                .setHref("https://www.slideshare.net/secret/gFrimzv7TYDDeC")
                .setTarget("_blank")
            );
            
            append(
                xui.create("xui.UI.Link")
                .setHost(host,"xui_ui_link2")
                .setLeft("5.833333333333333em")
                .setTop("35.833333333333336em")
                .setCaption("[ Click here to download the source code ]")
                .setHref("http://www.crossui.com/Download/demo.CRUD.zip")
                .setTarget("_blank")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }, 
        functions:{
            "refreshGrid":{
                "desc":"",
                "params":[
                    {
                        "id":"response",
                        "type":"Hash",
                        "desc":""
                    }
                ],
                "actions":[
                    {
                        "desc":"clear all rows",
                        "type":"control",
                        "target":"treegrid",
                        "args":[
                        ],
                        "method":"removeAllRows"
                    },
                    {
                        "desc":"add rows",
                        "type":"control",
                        "target":"treegrid",
                        "args":[
                            "{args[0].data}","","",false
                        ],
                        "method":"insertRows"
                    }
                ]
            },
            "onerror":{
                "desc":"",
                "params":[
                    {
                        "id":"message",
                        "type":"String",
                        "desc":""
                    }
                ],
                "actions":[
                    {
                        "desc":"alert",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "{args[0]}",""
                        ],
                        "method":"alert",
                        "onOK":2
                    }
                ]
            }
        }
    }
});