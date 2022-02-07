Search.setIndex({docnames:["api/asset_generator/api","api/asset_scanner/asset_scanner_api","api/item_generator/item_generator_api","asset_generator/index","asset_scanner/index","asset_scanner/input_plugins","asset_scanner/output_plugins","asset_scanner/plugin_filters","asset_scanner/processors","index","item_descriptions/building_a_workflow","item_descriptions/item_descriptions","item_generator/index","item_generator/shared/example_config","item_generator/user_guide/orientation"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["api/asset_generator/api.rst","api/asset_scanner/asset_scanner_api.rst","api/item_generator/item_generator_api.rst","asset_generator/index.rst","asset_scanner/index.rst","asset_scanner/input_plugins.rst","asset_scanner/output_plugins.rst","asset_scanner/plugin_filters.rst","asset_scanner/processors.rst","index.rst","item_descriptions/building_a_workflow.rst","item_descriptions/item_descriptions.rst","item_generator/index.rst","item_generator/shared/example_config.rst","item_generator/user_guide/orientation.rst"],objects:{"asset_generator.core":{asset_extractor:[0,0,0,"-"]},"asset_generator.core.asset_extractor":{AssetExtractor:[0,1,1,""]},"asset_generator.media_handlers":{object_store_handler:[0,0,0,"-"],posix_handler:[0,0,0,"-"]},"asset_generator.media_handlers.object_store_handler":{ObjectStoreHandler:[0,1,1,""]},"asset_generator.media_handlers.posix_handler":{PosixHandler:[0,1,1,""]},"asset_scanner.core":{BaseExtractor:[1,1,1,""],extractor:[1,0,0,"-"],item_describer:[1,0,0,"-"]},"asset_scanner.core.item_describer":{Category:[1,1,1,""],Collections:[1,1,1,""],Facets:[1,1,1,""],ItemDescription:[1,1,1,""],ItemDescriptions:[1,1,1,""],Processor:[1,1,1,""],Templates:[1,1,1,""]},"asset_scanner.core.item_describer.ItemDescriptions":{get_description:[1,2,1,""],load_config:[1,2,1,""]},"asset_scanner.plugins":{filters:[7,0,0,"-"],input_plugins:[5,0,0,"-"],output_plugins:[6,0,0,"-"]},"asset_scanner.plugins.extraction_methods":{header_extract:[8,0,0,"-"],iso19115_extract:[8,0,0,"-"],postprocessors:[8,0,0,"-"],preprocessors:[8,0,0,"-"],regex_extract:[8,0,0,"-"],xml_extract:[8,0,0,"-"]},"asset_scanner.plugins.extraction_methods.header_extract":{HeaderExtract:[8,1,1,""]},"asset_scanner.plugins.extraction_methods.iso19115_extract":{ISO19115Extract:[8,1,1,""]},"asset_scanner.plugins.extraction_methods.iso19115_extract.ISO19115Extract":{run:[8,2,1,""]},"asset_scanner.plugins.extraction_methods.postprocessors":{BBOXProcessor:[8,1,1,""],DateCombinatorProcessor:[8,1,1,""],FacetMapProcessor:[8,1,1,""],ISODateProcessor:[8,1,1,""],StringJoinProcessor:[8,1,1,""]},"asset_scanner.plugins.extraction_methods.preprocessors":{CEDAObservation:[8,1,1,""],ReducePathtoName:[8,1,1,""]},"asset_scanner.plugins.extraction_methods.regex_extract":{RegexExtract:[8,1,1,""]},"asset_scanner.plugins.extraction_methods.regex_extract.RegexExtract":{run:[8,2,1,""]},"asset_scanner.plugins.extraction_methods.xml_extract":{XMLExtract:[8,1,1,""]},"asset_scanner.plugins.extraction_methods.xml_extract.XMLExtract":{run:[8,2,1,""]},"asset_scanner.plugins.filters":{path_regex:[7,0,0,"-"]},"asset_scanner.plugins.input_plugins":{file_system_input:[5,0,0,"-"],intake_esm_input:[5,0,0,"-"],object_store_input:[5,0,0,"-"],rabbit_mq_input:[5,0,0,"-"],thredds_input:[5,0,0,"-"]},"asset_scanner.plugins.output_plugins":{elasticsearch_backend:[6,0,0,"-"],standard_out:[6,0,0,"-"]},"item_generator.core":{facet_extractor:[2,0,0,"-"]},"item_generator.core.facet_extractor":{FacetExtractor:[2,1,1,""]},"item_generator.core.facet_extractor.FacetExtractor":{get_collection_id:[2,2,1,""],process_file:[2,2,1,""],run_processors:[2,2,1,""]},asset_generator:{media_handlers:[0,0,0,"-"]},item_generator:{core:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method"},terms:{"0":[7,8,14],"00":[8,11],"00readm":11,"01":8,"01t00":8,"01t10":11,"02":6,"03":[8,11],"05":[3,4,10,11,12],"06":[6,10],"09":10,"1":[7,12,14],"19115":4,"2":[8,11,12,14],"2005":[3,4,10,12],"2020":11,"2021":[6,8,10],"29t00":8,"3":[11,14],"300":5,"4":[11,14],"5":8,"56":7,"7946":8,"8601":[8,14],"9t":14,"9v":14,"case":[7,8,11,14],"class":[0,1,2,3,4,8,12],"default":[1,7,8,11],"do":[7,14],"export":8,"final":[5,10,11],"function":11,"import":[3,4,12],"new":[8,14],"return":[1,2,8,14],"true":[5,7,8,10],"while":10,A:[6,8,9,10,11],As:14,At:[3,5,12],By:11,For:[1,5],If:[3,4,5,7,8,10,12,14],In:[7,8,10,14],It:[10,11,12],No:11,The:[0,2,3,4,5,6,8,9,10,11,12,14],There:[3,4,14],These:[9,11,12,14],To:[3,10,12,14],_:[8,11,14],__:14,abl:[7,12],about:[9,11,14],abov:14,absenc:[8,11],ac:[5,8],accept:8,access:[5,8,9],access_kei:5,access_url:5,accessor:8,act:14,action:[5,8],activ:6,ad:11,add:[4,8,10],addit:[4,8,10,12],additon:11,after:[5,8],against:[7,8],aggreg:[9,10,11,12,14],aggregation_facet:[1,11,14],aim:[12,14],all:[1,3,5,7,10,11,12,14],allof:11,allow:[4,8,9,10,11,12,14],along:[1,11],also:[8,9],an:[0,1,2,4,5,6,8,9,12,14],ani:[5,9,11],anoth:[11,14],api:[6,8,10],api_kei:10,append:[1,8],appli:[8,11,12],applic:11,ar:[1,3,4,5,6,7,8,9,10,11,12,14],architectur:9,arg:1,argument:[3,4,8,10,11,12],arrai:[1,8,11],asset:[5,6,10,11,12,14],asset_extractor:0,asset_gener:[0,3,4],asset_scann:[1,2,3,4,5,6,7,8,10,12],assetextractor:[0,3],assign:[10,11,14],atom:[0,5,12],attempt:8,attribut:[1,8,14],auto_ack:5,automat:8,avail:[3,12,14],aws_access_key_id:5,aws_secret_access_kei:5,b069:[3,4,10,12],back:[8,10],backend:6,background:14,badc:[1,3,4,7,10,11,12],base:[0,2,9,10,12],baseextractor:1,basenam:8,basi:12,basic:10,basic_consum:5,basicconfig:4,bbox:4,bboxprocessor:8,becaus:14,becom:11,been:10,befor:7,beginposit:8,behaviour:8,being:[5,9],belong:11,below:11,between:8,bind_kwarg:5,blank:8,block:5,bool:7,boto3:0,bound:5,branch:11,bucket:5,build:[8,9,12,14],call:[3,8,12],callback:5,can:[0,4,5,6,7,8,9,10,11,12,14],cannot:8,capabl:4,captur:[8,9],catalog:[5,9],catalog_kwarg:5,catalogu:8,categori:[1,3,9],cd:[3,12],ceda:[4,5,10,14],ceda_observ:8,cedadev:[3,5,12],cedaobserv:8,central:0,certain:[7,9],chain:[8,9,12],chang:[8,9,10],channel:5,charact:1,check:10,checksum:3,choos:10,client:6,clone:[3,12],cluster:6,cmip5:7,cmip:7,co:5,code:11,collabor:5,collect:[1,2,5,9,10,14],column:5,com:[3,12],combin:4,come:[11,14],command:[1,14],common:[1,9,14],complex:9,compliant:12,compon:[4,8],compris:5,conf:[0,1,2,3,4,10,12],config:10,configur:[0,1,5,6,7,8,9,14],confus:14,conneciton:5,connect:[5,6],connection_kwarg:[6,10],connectionparamet:5,consid:[10,14],consist:[10,11],consol:4,construct:[9,12,14],consume_kwarg:5,contain:[1,3,5,11,12,14],content:[4,5,6,10,12],continu:7,convent:10,convert:[8,11,14],coordin:8,core:[0,1,2,4,12],correct:[10,11],could:[0,5,9,10,12],cover:10,creat:[5,8,9,10,11],current:8,d:[8,11,14],dai:8,data:[1,3,4,5,8,9,11,12,14],dataset:[3,11,12,14],datastor:12,date:[4,11,14],date_combin:8,date_kei:[8,11,14],datecombinatorprocessor:8,datetim:[8,11,14],dateutil:8,ddthh:8,deal:14,debug:[6,9],defin:[1,4,6,9,10,11,14],definit:11,delimit:[5,8],depend:[3,12],deriv:1,describ:[1,4,5,9,10,11,14],descript:[0,2,4,5,6,7,8,9,12,14],design:9,desir:[10,12],dest:5,dest_exchang:5,destin:10,destination_exchang:5,destruct:8,determin:[5,6,8],develop:[8,10],dict:[0,1,2,5,6,8],dictionari:[1,5,8],differ:[0,6,8,9,11,12,14],directli:6,directori:[3,4,5,9,12],directory_or_fil:5,discov:9,document:[4,8,11,12,14],done:[10,11,12],dot:8,down:[1,11],download:12,downstream:[1,6,12],dump:9,duplic:1,durabl:5,dure:11,e:[1,3,7,8,10,11],each:[1,5,12,14],earth:9,easili:9,east:8,either:[4,7],elasticsearch:[4,9,10,12,14],element:8,elementtre:8,empti:8,enabl:1,end:[6,10,14],end_datetim:14,endpoint:5,endpoint_url:5,entri:[1,3,4,5,6,7,12,14],error:8,esm:5,esm_datastor:5,etc:[0,3,9,10,12],etre:8,even:[9,14],exampl:[3,5,6,7,8,9,12,14],exchang:4,exclud:7,exist:11,exit:[3,4,10,12],expand:10,expect:[5,8,9,10,11],express:8,ext:5,extens:[4,14],extract:[0,2,4,6,9,10,11,12,14],extraction_kei:8,extraction_method:[1,8,10,11,14],extractor:[3,4,5,11,12],faam:[1,3,4,10,11,12],facet:[1,2,4,9,10,12,14],facet_extractor:2,facet_map:8,facetextractor:[2,4],facetmapprocessor:8,fals:[5,7,10],fanout:5,feed:[4,11],ffffff:8,field:9,file:[0,1,2,3,4,6,7,8,9,10,12,14],file_system:[3,4,5,7,10,12],filelist:1,filenam:[4,10,11,14],filename_reduc:[8,11,14],filepath:[1,2,7,8,10,11],fill:8,filter:[4,5,9],filter_expr:8,find:8,first:[4,11],fit:[4,8,9,14],flag:7,flexibl:5,flight:11,flight_numb:11,flip:7,focus:9,form:[3,11,12,14],format:[3,5,8,11,12,14],found:[10,11,14],framework:[9,12,14],free:8,from:[0,1,2,4,5,7,8,9,10,11,12,14],full:11,fulli:[10,12],futur:11,g:[1,3,7,8,10,11],gather:3,gc:0,gener:[1,6,9,10,11,14],geospati:9,get:[1,4,9,10],get_collection_id:2,get_descript:1,get_info:8,git:[3,12],github:[0,1,2,3,4,9,12],given:[1,8,11],global:14,gml:8,go:10,group:[5,8,10,11],gs:1,guid:[12,14],h:[3,4,10,12],ha:14,had:[10,14],handl:1,handler:[3,9],happen:6,happi:10,have:[3,4,10,11,12,14],header:[4,5,10,14],header_extract:[8,14],headerextract:8,heartbeat:5,held:0,help:[3,4,10,12,14],here:[10,11,14],hide:10,hierarchi:11,higher:[9,10,11],hold:[1,4],home:4,host1:[6,10],host2:6,host:[5,6,10],hour:8,how:[10,11,14],http:[1,3,5,8,12],i:[3,11,14],ic93xnsbhuk7qqvbsfw:14,id:[1,2,10,11,12,14],identifi:11,ignor:[1,7,10],includ:[7,8,10,12,14],incorrect:11,increas:10,independ:10,index:[3,6,9,12],indic:6,individu:[2,3,14],info:4,inform:[8,9,11,12],ingest:9,inject:8,input:[3,4,7,8,9,10,11,12,14],input_plugin:5,inspect:12,instal:[5,6,9],instanc:0,institut:[8,14],intak:4,intake_catalog:5,intake_esm:5,interfac:[0,1,8],introduct:12,invoc:14,ipf:0,iso19115:8,iso19115_extract:8,iso19115extract:8,iso8601:11,iso:[4,11,14],isod:8,isodate_processor:[8,11,14],isodateprocessor:8,item:[4,5,9,14],item_describ:[1,2],item_descript:[2,3,4,10,12],item_gener:[2,4],itemdescript:[1,2,11],iter:10,its:[0,8],itself:8,jan:[3,4,10,12],jc:5,join:[4,14],json:[5,11,12],just:[10,11],kei:[5,8,10,11],key_list:8,known:[8,11],kwarg:[0,2,3,4,5,6,8,10],label:[1,3,8,11],languag:9,least:[3,4,12],lend:8,level:[1,3,4,9,11,12,14],leverag:9,librari:[3,12],like:[8,10,12,14],limit:8,line:14,link:[10,14],list:[1,2,5,8,9,11,14],listen:5,ll:[3,12],load:[1,4,5,6,7],load_config:1,locat:[3,9,11],log:[4,8,14],longer:10,look:1,lookup:1,loop:10,lower:11,m:8,mai:[8,9,10],main:[8,10],make:[5,8,10,12,14],manag:[3,12],manifest:8,manipu:8,map:[1,4,6,11],match:[1,7,8,11],matter:11,media:[2,3,8,9],media_handl:[0,3],media_sourc:8,merg:[1,8,12,14],messag:[3,4,5,9,10,12],metadata:[0,3,6,8,9,10,11,14],method:[0,2,4,8,10,11],microsecond:8,might:[7,8,10],minunt:8,minut:8,mm:8,model:[1,11],modifi:[3,4,8,9],modul:[1,9],modular:[4,9,14],moment:5,month:8,more:[1,5,6,7,9,14],multi:11,multipl:[5,8,11,12],must:[3,4,7,12],my:[5,14],my_bucket:5,my_virtual_host:5,mydest:5,mysourc:5,name:[3,4,5,6,7,8,9,10,11,12,14],namespac:[5,6,7,8,10,12],narrow:11,natur:8,need:[3,4,9,10,12,14],neodc:14,nest:8,netcdf:14,node:1,none:[1,5,6],north:8,note:11,now:10,number:[10,11],o:5,ob:8,object:[2,3,4,8,9,11,12],object_path_attr:5,object_stor:5,object_store_handl:0,objectstorehandl:0,observ:4,onc:10,one:[3,4,5,6,7,8,11,12],onli:[4,5,7,8],onward:9,open:5,open_esm_datastor:5,opendap:5,oper:[8,9],option:[0,1,3,5,6,7,8,9,10,12],orbit:14,order:8,orient:12,os:[5,8],other:[1,5,8,11,14],ouput:14,our:10,out:[4,8,10],outlin:2,output:[3,4,8,9,10,12,14],output_kei:8,output_plugin:6,over:4,overrid:[1,11],overridden:1,overwritten:[8,11],own:14,p:[8,11,14],packag:[1,3,4,5,6,9,12,14],page:9,pair:8,parallel:10,param:[2,8],paramet:[0,1,2,5,11],pars:8,parser:8,part:[8,9,10,11,14],parti:4,pass:[0,1,3,4,5,6,7,8,9,11,14],password:5,path:[1,2,3,4,5,6,8,9,10,12,14],path_regex:7,path_to_config_fil:10,pattern:[7,11],pend:1,perform:[5,9],pick:[3,4,12],piec:14,pika:5,pip:[3,4,5,6,12],pipelin:[2,3,12],place:[5,6,11],platform:[8,11,14],pleas:8,pluggabl:14,plugin:[3,8,9,10,12,14],plugin_filt:7,pluginfilt:5,point:[1,3,4,5,6,7,10,11,12,14],pop:8,posit:[3,4,10,12],posix:[2,5,8],posix_handl:0,posixhandl:0,post:[4,11,14],post_processor:[8,11,14],postgr:9,postprocessor:8,pr:14,pre:[1,4,7,11,14],pre_processor:[8,11,14],preced:4,precend:11,prefix:[5,8],premis:12,prepar:6,preprocessor:8,present:[3,12],prevent:5,previou:8,print:6,process:[0,2,5,6,7,8,9,10,11,12],process_fil:[0,2],processing_level:14,processor:[1,2,4,6,9,12,14],processor_entry_point:1,product_vers:14,project:11,properti:[1,8,11],provid:[0,1,3,5,9,12,14],pull:8,put:[8,10],py:1,python:[3,4,5,8,11,12,14],queue:[4,9],queue_bind:5,queue_declar:5,quick:10,r:[3,12],rabbit:5,rabbitmq:4,rang:9,rather:8,raw:2,read:[12,14],record:[8,11],reduc:[4,11],reducepathtonam:8,ref:11,refer:[1,11,12],regex:[1,4,11,14],regex_extract:8,regexextract:8,regular:8,rel:10,relev:[9,12],remot:1,remov:8,repositori:[12,14],repres:9,request:8,requir:[3,4,5,6,7,8,9,11,12,14],respect:8,respons:[7,8],result:[2,8,10],retriev:[1,8],rfc:8,rl:5,root:[1,2,4,5],root_directori:[2,3,4,10,12],root_path:1,round:10,rout:5,routing_kei:5,rsmith013:4,run:[3,4,5,8,9,11,12,14],run_processor:2,s3:[0,5],same:[8,10,11,14],sampl:9,scan:5,scanner:[3,5,6,10,12,14],schema:9,scope:10,script:4,search:[5,9,11],search_facet:[1,11],search_futur:4,search_kwarg:5,second:[8,11,14],secret:5,secret_kei:5,section:[8,9,10],see:4,segment:10,select:[8,12],self:11,send:7,sensor:[8,14],sentinel3:11,sentinel5:14,sentinel5p:14,separ:[6,8,12],sequenti:5,server:5,session:0,session_kwarg:[0,5],set:11,setup:[1,4],sever:[5,10],share:9,should:[8,10,11,12,14],show:[3,4,10,12],signatur:8,simpl:[6,9,10],singl:[11,12],siphon:5,size:[3,9],small:10,smaller:10,so:[1,9,10,14],some:[3,7,8,9,14],sourc:[2,3,4,5,8,9,12],source_exchang:5,source_media:[2,8],south:8,space:9,spatiotempor:9,specif:[1,3,9,12],specifc:5,specifi:[3,4,7,8,12],split:10,ss:8,ssl_show_warn:10,stac:[4,12,14],stac_bbox:8,stage:10,standard:[0,4,10],standard_out:[3,4,6,10,12],start_datetim:[8,14],start_tim:8,step:[8,9,10,14],still:9,storag:[0,14],storage_media:2,storagetyp:2,store:[4,9,12,14],str:[1,2,6,8],stream:9,string:[4,5,7,11],string_join:8,stringjoinprocessor:8,strptime:8,style:5,submit:5,subsequ:8,summari:11,suppl:8,support:8,sure:[8,10,14],system:[4,9,14],t:8,tabl:8,take:[3,4,5,7,8,9,10,11,12],tape:[0,2],target:8,tdscatalog:5,templat:[1,8,11],term1:11,term2:11,term:[8,11],term_map:8,termin:9,test:[5,6,7,10,14],test_directori:5,text:8,than:[5,6,7,8],thei:[5,8,10,11,14],them:[1,14],thi:[0,1,3,4,5,7,8,9,10,11,12,14],thing:[10,12,14],third:4,those:8,thredd:4,time:[3,9],time_coverage_start:8,titl:[1,11],todo:5,togeth:[8,10,11,12,14],took:11,tool:[3,9,12],top:[1,3,4,11,12],treat:14,tree:[1,10,11],truth:3,tweak:10,two:[10,11,12,14],txt:[3,12],type:[0,2,3,5,6,7,8,9,11],uk:[5,8],under:11,understand:14,until:10,up:[3,4,10,12,14],upsert:[9,12,14],uri:5,url:[5,8],url_templ:8,us:[0,1,3,4,5,6,7,8,9,10,11,12,14],usag:[9,10],use_ssl:10,user:[4,5,9,14],usernam:5,uuid:8,v0:8,valid:12,valu:[0,1,4,5,6,7,8,11,14],value1:11,value2:11,variabl:14,variou:14,vendor:8,verify_cert:10,version:12,vhost:5,via:[3,12],view:[0,1,2,3,4,9,12],virtual:5,w:[11,14],wa:9,wai:14,walk:5,want:[5,6,8,10],we:[10,14],welcom:14,well:[4,10],west:8,what:[6,11,14],when:8,where:[3,5,8,11,12],whether:8,which:[1,4,5,6,7,8,9,11,12,14],whilst:[8,10],wish:[8,10],within:11,work:[5,10,12,14],workflow:[4,6,8,9,10,11,14],would:[5,8],write:[8,11,14],x:10,xml:4,xml_extract:8,xmlextract:8,xpath:8,y:8,yaml:[3,4,6,10,12,14],year:8,yet:14,yml:[3,12],you:[3,4,5,6,8,9,10,11,12,14],your:[3,4,10,11,12,14],yyyi:8,zarr:[5,9]},titles:["Asset Generator API","Asset Scanner API","Item Generator API","Asset Generator","Asset Scanner","Input Plugins","Output Plugins","Plugin Filters","Processors","Asset Scanner","Building an Item Description","Item Descriptions","Item Generator","&lt;no title&gt;","Orientation"],titleterms:{"1":10,"19115":8,"2":10,"3":10,"4":10,an:10,api:[0,1,2,9],asset:[0,1,3,4,9],base:[1,4],bbox:8,build:10,categori:11,ceda:8,collect:11,combin:8,configur:[2,3,4,10,12],content:9,core:8,data:10,dataset:10,date:8,descript:[1,3,10,11],elasticsearch:6,exampl:[10,11],exchang:5,extract:8,extractor:[0,1,9],facet:[8,11],field:3,file:[5,11],filenam:8,filter:7,full:10,gener:[0,2,3,12],handler:0,header:8,index:10,indic:9,input:5,instal:[3,4,12],intak:5,iso:8,item:[1,2,3,10,11,12],join:8,map:8,media:0,object:[0,5],observ:8,option:4,orient:14,out:6,output:6,parti:8,path:[7,11],plugin:[4,5,6,7],posix:0,post:8,pre:8,processor:[8,11],queue:5,rabbitmq:5,reduc:8,regex:[7,8],relev:3,run:10,sampl:[3,4,12],scanner:[1,4,9],schema:11,section:11,stac:[8,9],standard:6,store:[0,5],string:8,subset:10,system:5,tabl:9,third:8,thredd:5,usag:[3,4,12],what:9,write:10,xml:8}})