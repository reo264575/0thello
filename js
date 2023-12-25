console.log("hello");

function hyouji(A, Y, countbl, countwh) {   //hyouji(bannmenn,uterubasho,kuronokazu,shironokazu)
    let p, q;  
    var C = [];
    for(var i=0; i<8; i++){
        C[i] = [];
        for(var j=0; j<8; j++){
            C[i][j] = 0;
        }
    }                                                              
    for (let i = 0; i < 8; i ++) {
        for (let j = 0; j < 8; j ++) {
            C[i][j] = A[i][j];
        }
    }
    for (let l = 0; l < Y.length / 2; l ++) {                                //012dekouseisaretaAniuterubashoY3wotuika
        p = Y.get(l * 2);
        q = Y.get(l * 2 + 1);
        C[p][q] = 3;
    }
    System.out.println("        a");
    System.out.println("        1  2  3  4  5  6  7  8");
    System.out.println("       ________________________");
    System.out.printf("b");
    for (let i = 0; i < 8; i ++) {
        System.out.print("  ");
        System.out.print(i + 9); 
        System.out.print(" |"); 
        for (let j = 0; j < 8; j ++) { 
            if (C[i][j] == 0) {
                System.out.print("   "); 
            }
            if (C[i][j] == 1) {
                System.out.printf("%3d", 1); 
            }
            if (C[i][j] == 2) {
                System.out.printf("%3d", 0);
            }
            if (C[i][j] == 3) {
                System.out.print("   "); 
            }
        }
        System.out.print("|"); 
        System.out.println();
    }           
    System.out.println("      -------------------------"); 
    System.out.println();
    System.out.println("0---" + countbl); 
    System.out.println("1---" + countwh); 
} 

function hanntei(xa, xb, A, Z) {   //hanntei(azahyou,bzahyou,bannmenn,tebann) (bzahyou,azahyouno2tuinosuuretu)
    let xxa, xxb, k;
    var X = [];
    for (let m = 0; m < 4; m ++) {                                  //m ==1shita 2ue 3migi 4hidari
        xxb = xb;
        xxa = xa;
        for (let i = 1; i < 8; i ++) {              
            if (m == 0) {if (xxb < 7) { ++xxb; }}
            if (m == 1) {if (xxb > 0) { --xxb; }}
            if (m == 2) {if (xxa < 7) { ++xxa; }}
            if (m == 3) {if (xxa > 0) { --xxa; }}                   
            if (A[xxb][xxa] == 0) {                                 //0,shuuryou onaji,oidawokiroku chigau,keizoku
                break;
            }
            if (A[xxb][xxa] == Z) {
                if (m == 0) {
                    for (let j = xb + 1; j < xxb; j ++) { 
                        X.push(j);
                        X.push(xa);
                    }
                }
                if (m == 1) {
                    for (let j = xb - 1; j > xxb; j --) { 
                        X.push(j);
                        X.push(xa);
                    }
                }
                if (m == 2) {
                    for (let j = xa + 1; j < xxa; j ++) {                           
                        X.push(xb);
                        X.push(j);
                    }
                }
                if (m == 3) {
                    for (let j = xa - 1; j > xxa; j --) { 
                        X.push(xb);
                        X.push(j);
                    }
                } 
                break;   
            }                              
        }           
    }
    for (let m = 0; m < 4; m ++) {                                     //1migishita 2migiue 3hidariue 4hidarishita
        xxb = xb;
        xxa = xa;
        for (let i = 1; i < 8; i ++) {
            if (m == 0) {if (xxb < 7 && xxa < 7) {++xxb; ++xxa;}}
            if (m == 1) {if (xxb > 0 && xxa < 7) {--xxb; ++xxa;}}
            if (m == 2) {if (xxb > 0 && xxa > 0) {--xxb; --xxa;}}
            if (m == 3) {if (xxb < 7 && xxa > 0) {++xxb; --xxa;}}             
            if (A[xxb][xxa] == 0) {
                break;
            }
            if (A[xxb][xxa] == Z) {
                if (m == 0) {
                    k = xa + 1;
                    for (let j = xb + 1; j < xxb; j ++){
                        X.push(j);
                        X.push(k);
                        ++k;
                    }
                }
                if (m == 1) {
                    k = xa + 1;
                    for (let j = xb - 1; j > xxb; j --) {
                        X.push(j);
                        X.push(k);
                        ++k;
                    } 
                }
                if (m == 2) {
                    k = xa - 1;
                    for (let j = xb - 1; j > xxb; j --) {
                        X.push(j);
                        X.push(k);
                        --k;
                    }
                }
                if (m == 3) {
                    k = xa - 1;
                    for (let j = xb + 1; j < xxb; j ++) {
                        X.push(j);
                        X.push(k);
                        --k;
                    }
                }
                break;
            }     
        }
    }
    return X;
}

function uterubasho(A, Z) {                //uterubasho(bannmenn,tebann) (b,a2tsuinosuuretu)
    var X = [];
    var Y = [];
    for (let i = 0; i < 8; i ++) {
        for (let j = 0; j < 8; j ++) {
            if (A[i][j] == 0) {
                X = hanntei(j, i, A, Z);                           //hikkurigaetubashogaarebaYnikiroku
                if (X.length > 1) {
                    Y.push(i);
                    Y.push(j);
                }
            }
        }
    }
    return Y;
}

function kado(a, b, A, Z) {                //kado(a,b,bannmenn,tebann)(seisuu)kadoutarerunarakitoku
    var Y = [];
    var C = [];
    for(var i=0; i<8; i++){
        C[i] = [];
        for(var j=0; j<8; j++){
            C[i][j] = 0;
        }
    }                    
    let p, q;
    let k = 0;
    let bl = 1;
    let wh = 2;
    C = uragaesu(a, b, A, Z);
    if(Z == bl) {
        Z = wh;
    }
    else {
        Z = bl;
    }
    Y = uterubasho(C, Z);
    for(let i = 0; i < Y.length / 2; i ++) {
        p = Y[i * 2];
        q = Y[i * 2 + 1];                                           
        if (p == 0 && q == 0) {
            k = 2;
        }
        if (p == 0 && q == 7) {
            k = 2;
        }
        if (p == 7 && q == 0) {
            k = 2;
        }
        if (p == 7 && q == 7) {
            k = 2;
        }
    }
    return k;
}

function hyoukachi(A, Z, O) {                   //saisenn(bannmenn,tebann,tesuu) (x[25][12])
    var ybl = []; 
    var ywh = []; 
    var YY = []; 
    var Y = [];
    var ww =[]; 
    YY = uterubasho(A, Z);
    var X = [];                                  //0goukei 1a 2b 3uterukosuu 4hikkurigaerukosuu 5zahyou 
    for(var i=0; i<25; i++){
        X[i] = [];
        for(var j=0; j<12; j++){
            X[i][j] = 0;
        }
    }                    
    var Xc = [];
    for(var i=0; i<12; i++){
        Xc[i] = 0;
    }                    
    var C = [];
    for(var i=0; i<8; i++){
        C[i] = [];
        for(var j=0; j<8; j++){
            C[i][j] = 0;
        }
    }                                             
    let p, q, z, m, top, r, s, w, yblw, ywhw;
    let count = 24;
    let KK = 0;
    var yblc = [];
    var ywhc = [];
    let Top = -1000;
    let bl = 1;
    let wh = 2;
    let K = YY.size() / 2;
    for (let l = 0; l < K; l ++) {    
        for (let i = 0; i < 8; i ++) {
            for (let j = 0; j < 8; j ++) {
                C[i][j] = A[i][j];
            }
        }
        p = YY[l * 2];
        q = YY[l * 2 + 1];                                    //uterubasho(p,q)
        if (A[0][0] == 0) {                                       //kadoaiterunara(kado+20 kadoyoko-5 hoshi-13)
            if (p == 0 && q == 0) {
                X[l][5] += 20;
            }
            if (p == 1 && q == 0) {
                X[l][5] -= 5;
            }
            if (p == 0 && q == 1) {
                X[l][5] -= 5;
            }
            if (p == 1 && q == 1) {
                X[l][5] -= 13;
            }
        }
        if (A[0][7] == 0) {
            if (p == 0 && q == 7) {
                X[l][5] += 20;
            }
            if (p == 1 && q == 7) {
                X[l][5] -= 5;
            }
            if (p == 0 && q == 6) {
                X[l][5] -= 5;
            }
            if (p == 1 && q == 6) {
                X[l][5] -= 13;
            }
        }
        if (A[7][0] == 0) {
            if (p == 7 && q == 0) {
                X[l][5] += 20;
            }
            if (p == 6 && q == 0) {
                X[l][5] -= 5;
            }
            if (p == 7 && q == 1) {
                X[l][5] -= 5;
            }
            if (p == 6 && q == 1) {
                X[l][5] -= 13;
            }
        }
        if (A[7][7] == 0) {
            if (p == 7 && q == 7) {
                X[l][5] += 20;
            }
            if (p == 6 && q == 7) {
                X[l][5] -= 5;
            }
            if (p == 7 && q == 6) {
                X[l][5] -= 5;
            }
            if (p == 6 && q == 6) {
                X[l][5] -= 13;
            }
        }
        ww = hanntei(q, p, C, Z); 
        w = ww.length;
        if (O <= 16) {                                               //4(4)-2x(21)-x(48)0(57)2x(60)4x(64)
            X[l][4] = - w             
        }
        if (17 <= O && O <= 44) {
            X[l][4] = - w / 2;
        }
        if (53 <= O && O <= 56) {
            X[l][4] = w;
        }
        if (57 <= O) {
            X[l][4] = w * 2;
        }
        C = uragaesu(q, p, C, Z);                                 //kateishiteuragaeshitaatonobannmenn
        Y = uterubasho(C, Z);                                     //tebanngauterubasho
        ybl = uterubasho(C, bl);                                  //kurogauterubasho
        yblw = ybl.length;
        ywh = uterubasho(C, wh);                                  //shirogauterubaso
        ywhw = ywh.length;
        if (Z == bl) {
            if (yblw == 0) {
                X[l][5] += 50;                                    //pasu+50
            }
            for (let i = 0; i < ywhw / 2; i ++) {
                r = ywh[i * 2];
                s = ywh[i * 2 + 1];
                if (r == 0 && s == 0) {                           //yokokarakadoniutareru-25
                    X[l][5] -= 25;
                    if (p == 1 && q == 1) {
                        X[l][5] += 15;                            //nanamekarakadoniutareru-10
                    }
                }
                if (r == 7 && s == 7) {
                    X[l][5] -= 25;
                    if (p == 6 && q == 6) {
                        X[l][5] += 15;
                    }
                }
                if (r == 0 && s == 7) {
                    X[l][5] -= 25;
                    if (p == 1 && q == 6) {
                        X[l][5] += 15;
                    }
                }
                if (r == 7 && s == 0) {
                    X[l][5] -= 25;
                    if (p == 6 && q == 1) {
                        X[l][5] += 15;
                    }
                }
            }
        }
        if (Z == wh) {
            if (yblw == 0) {
                X[l][5] += 50;
            }
            for (let i = 0; i < yblw / 2; i ++) {
                r = ybl[i * 2];
                s = ybl[i * 2 + 1];
                if (r == 0 && s == 0) {
                    X[l][5] -= 25;
                    if (p == 1 && q == 1) {
                        X[l][5] += 15;
                    }
                }
                if (r == 7 && s == 7) {
                    X[l][5] -= 25;
                    if (p == 6 && q == 6) {
                        X[l][5] += 15;
                    }
                }
                if (r == 0 && s == 7) {
                    X[l][5] -= 25;
                    if (p == 1 && q == 6) {
                        X[l][5] += 15;
                    }
                }
                if (r == 7 && s == 0) {
                    X[l][5] -= 25;
                    if (p == 6 && q == 1) {
                        X[l][5] += 15;
                    }
                }
            }
        }
        for (let i = 0; i < yblw / 2; i ++) {              //kadotorarerunarauterunikaunntoshinai
            r = ybl[i * 2];
            s = ybl[i * 2 + 1];
            KK = kado(s, r, A, Z);
            yblc += KK;
        }
        for (let i = 0; i < ywhw / 2; i ++) {
            r = ywh[i * 2];
            s = ywh[i * 2 + 1];
            KK = kado(s, r, A, Z);
            ywhc += KK;
        }
        if (Z == bl) {
            X[l][6] = yblw / 2;
            X[l][7] = - ywhw / 2;
            X[l][8] = - yblc / 2;
            X[l][9] = ywhc / 2;
            X[l][3] = (yblw - ywhw - yblc + ywhc) / 2;       //3uterbashonosa
        }
        else {
            X[l][6] = ywhw / 2;
            X[l][7] = - yblw / 2;
            X[l][8] = - ywhc / 2;
            X[l][9] = yblc / 2;
            X[l][3] = (ywhw - yblw - ywhc + yblc) / 2;
        }
        for (let i = 3; i < 6; i ++) {
            X[l][0] += X[l][i];
        }
        X[l][1] = q + 1;
        X[l][2] = p + 9;
        yblc = 0;
        ywhc = 0;
    }
    for (let i = 0; i < 25; i ++) {
        if (X[i][1] == 0 && X[i][2] == 0) {
            X[i][0] = -500;
        }
    }
    for (let i = 0; i < 25; i ++) {                            //narabekae
        for (let j = i; j < 25; j ++) {    
            if (X[j][0] > Top) {
                Top = X[j][0];
                count = j;
                for (let k = 0; k < 12; k ++) {    
                    Xc[k] = X[j][k];
                }
            }
        }
        for (let k = 0; k < 12; k ++) {    
            X[count][k] = X[i][k];
        }
        for (let k = 0; k < 12; k ++) {    
            X[i][k] = Xc[k];
        }
        Top = -1000;
    }
    return X;
}

function saizenn(A, Z, O) {  
    var XY = [];
    for(var i=0; i<2; i++){
        XY[i] = 0;
    }                 
    var X = [];
    for(var i=0; i<25; i++){
        X[i] = [];
        for(var j=0; j<12; j++){
            X[i][j] = 0;
        }
    }                 
    var XX = [];
    for(var i=0; i<25; i++){
        XX[i] = [];
        for(var j=0; j<12; j++){
            XX[i][j] = 0;
        }
    }                 
    var AA = [];
    for(var i=0; i<8; i++){
        AA[i] = [];
        for(var j=0; j<8; j++){
            AA[i][j] = 0;
        }
    }                 
    var Xc = [];
    for(var i=0; i<12; i++){
        Xc[i] = 0;
    }                 
    let count = 24;
    let Top = -1000;
    let zz;
    let bl = 1;
    let wh = 2;
    let p, q, OO;
    X = hyoukachi(A, Z, O);
    for(let i = 0; i < 25; i ++) {
        p = X[i][2] - 9;
        q = X[i][1] - 1;
        if (X[i][0] == -500) {
            X[i][11] = -500;
            continue;
        }
        if(0 <= q && q <= 7){
            if(0 <= p && p <= 7){
                AA = uragaesu(q, p, A, Z);
                if(Z == bl) {
                    zz = wh;
                }
                else {
                    zz = bl;
                }
                OO = O + 1;
                XX = hyoukachi(AA, zz, OO);  
                X[i][10] = XX[0][0];    
                X[i][11] = X[i][0] - X[i][10];   
            }
        }            
    } 
    for (let i = 0; i < 25; i ++) {                            //narabekae
        for (let j = i; j < 25; j ++) {    
            if (X[j][11] > Top) {
                Top = X[j][11];
                count = j;
                for (let k = 0; k < 12; k ++) {    
                    Xc[k] = X[j][k];
                }
            }
        }
        for (let k = 0; k < 12; k ++) {    
            X[count][k] = X[i][k];
        }
        for (let k = 0; k < 12; k ++) {    
            X[i][k] = Xc[k];
        }
        Top = -1000;
    }
    for (let i = 0; i < 25; i ++) {                           //hyouji
        if (X[i][11] == -500) {
            continue;
        }
        for (let j = 0; j < 12; j ++) {
            System.out.printf("%3d", X[i][j]);
        }

        System.out.println(" ");
    }    
    XY[1] = X[0][2] - 9;
    XY[0] = X[0][1] - 1;  
    return XY;
}

function uragaesu(xa, xb, A, Z) {     //uragaesu(a,b,bannmann,tebann)(matorikkusu)
    let p, q;
    var X =[];
    var AA = [];
    for(var i=0; i<8; i++){
        AA[i] = [];
        for(var j=0; j<8; j++){
            AA[i][j] = 0;
        }
    }                 
    for (let i = 0; i < 8; i ++) {
        for (let j = 0; j < 8; j ++) {
            AA[i][j] = A[i][j];
        }
    }
    X = hanntei(xa, xb, A, Z);
    AA[xb][xa] = Z;
    w = X.length;
    for(let i = 0; i < W / 2; i ++) {
        p = X[i * 2];
        q = X[i * 2 + 1];
        AA[p][q] = Z;                                           //hannteinojyouhoukarauragaesu
    }
    return AA;
}

function main(args){
    var A = [];
    for(var i=0; i<8; i++){
        A[i] = [];
        for(var j=0; j<8; j++){
            A[i][j] = 0;
        }
    }           
    var XX = [];
    for(var i=0; i<2; i++){
        XX[i] = 0;
    }           
    var X =[];
    var Y =[];
    var ybl =[];
    var ywh =[];
    let ok;
    let a, b, p, q, Xw, Yw;
    let xa = 0;
    let xb = 0;
    let countbl = 2;
    let countwh = 2;
    let bl = 1;
    let wh = 2;
    A[3][3] = bl;
    A[4][4] = bl;
    A[3][4] = wh;
    A[4][3] = wh;
    let Z = bl;
    let z = wh;
    Y = uterubasho(A, Z);
    Yw = Y.length;
    ybl = uterubasho(A, bl);
    ywh = uterubasho(A, wh);
    hyouji(A, Y, countbl, countwh);  
    for (let l = 1; l < 80; l ++) {
        Y = uterubasho(A, Z);
        if (Yw == 0) {                              //uterubashonakerebakoutai
            if(Z == bl) {
                Z = wh;
            }
            else {
                Z = bl;
            }
            continue;
        }
        if (Z == wh || Z == bl) {                                    //2naragidouuchi
            XX = saizenn(A, Z, l);
            xa = XX[0];
            xb = XX[1];
            A = uragaesu(xa, xb, A, Z);
            if(Z == bl) {                                //koutai
                Z = wh;
            }
            else {
                Z = bl;
            }
            Y = uterubasho(A, Z);                        //hyouginotamenojyouhouatume
            for (let i = 0; i < 8; i ++) {
                for (let j = 0; j < 8; j ++) {
                    if (A[i][j] == 1) {
                        countbl += 1;
                    }
                    if (A[i][j] == 2) {
                        countwh += 1;
                    }
                }
            }
            hyouji(A, Y, countbl, countwh); 
            countbl =  0;
            countwh = 0;
            continue;
        }
        ok = 0;                                   //nyuuryoku
        while (ok == 0){
            System.out.printf("a---"); 
            a = stdIn.nextInt();
            System.out.printf("b---"); 
            b = stdIn.nextInt();
            if (a == 0 && b == 0) {                  //00dekyouseishuuryou
                System.exit(0);
            }
            xa = a - 1;
            xb = b - 9;
            if (0 < a && a < 9) {
                if (8 < b && b < 17) {
                    if (A[xb][xa] == 0) {
                        X = hanntei(xa, xb, A, Z);
                        Xw = X.length;
                        if (Xw > 0) {
                            ok = 1;
                        }
                    }
                }
            }       
        }
        A = uragaesu(xa, xb, A, Z);                     //koutei
        if(Z == bl) {
            Z = wh;
        }
        else {
            Z = bl;
        }
        Y = uterubasho(A, Z);                           //hyouginotamenojyouhouatume
        ybl = uterubasho(A, bl);
        ywh = uterubasho(A, wh);
        for (let i = 0; i < 8; i ++) {
            for (let j = 0; j < 8; j ++) {
                if (A[i][j] == 1) {
                    countbl += 1;
                }
                if (A[i][j] == 2) {
                    countwh += 1;
                }
            }
        }
        hyouji(A, Y, countwh, countbl); 
        countbl =  0;
        countwh = 0;
        X.clear();
    }
    for (let i = 0; i < 8; i ++) {              //shuukeitokekka
        for (let j = 0; j < 8; j ++) {
            if (A[i][j] == 1) {
                countbl += 1;
            }
            if (A[i][j] == 2) {
                countwh += 1;
            }
        }
    }
    if (countbl > countwh) {
        System.out.println("win"); 
    }
    else {
        System.out.println("loose");
    }
}
main();

