var mobileSelect4 = new MobileSelect({
    trigger: '#trigger4',
    title: '地区选择',
    wheels: [
                {data:[
                    {
                        id:'1',
                        value:'上海',
                        childs:[
                            {id:'1',value:'上海'},
                        ]
                    },
                    {
                        id:'2',
                        value:'北京',
                        childs:[
                            {id:'1',value:'北京'},
                        ]
                    },
                    {
                        id:'3',
                        value:'天津',
                        childs:[
                            {id:'1',value:'天津'},
                        ]
                    },
                    {
                        id:'4',
                        value:'山东',
                        childs:[
                            {id:'1',value:'济宁'},
                            {id:'2',value:'济南'},
                            {id:'3',value:'青岛'},
                            {id:'4',value:'烟台'},
                            {id:'5',value:'德州'}
                        ]
                    },
                     {
                        id:'5',
                        value:'河北',
                        childs:[
                            {id:'1',value:'石家庄'},
                            {id:'2',value:'沧州'},
                            {id:'3',value:'邢台'},
                            {id:'4',value:'保定'},
                            {id:'5',value:'张家口'}
                        ]
                    },
                     {
                        id:'6',
                        value:'黑龙江',
                        childs:[
                            {id:'1',value:'大庆'},
                            {id:'2',value:'牡丹江'},
                            {id:'3',value:'鸡西'},
                            {id:'4',value:'双鸭山'},
                            {id:'5',value:'齐齐哈尔'}
                        ]
                    },
                ]}
            ],  
});
