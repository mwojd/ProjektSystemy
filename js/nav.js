var two = 0;
var three = 0;
var four = 1;

function TwoSubOpen(){
  $sub_menu_two = document.getElementById('two_sub_menu');
  if(!two){
    if(three){
      ThreeSubOpen();
    }
    if(four){
        FourSubOpen()
    }
    $sub_menu_two.style.height = "68px";
    two++;
  }else{
    $sub_menu_two.style.height = "0";
    two--;
  }
}

function ThreeSubOpen(){
  $sub_menu_three = document.getElementById('three_sub_menu');
  if(!three){
    if(two){
      TwoSubOpen();
    }
    if(four){
        FourSubOpen()
    }
    $sub_menu_three.style.height = "102px";
    three++;
  }else{
    $sub_menu_three.style.height = "0";
    three--;
  }  
}
function FourSubOpen(id){
    $sub_menu_four = document.getElementById(id);
    if(!four) {
        if(two){
            TwoSubOpen();
        }
        if(three){
            ThreeSubOpen();
        }
        $sub_menu_four.style.height = "136px";
        four++;
      }else{
        $sub_menu_four.style.height = "0";
        four--;
      }  
}

function changeCont(id){
    var cnt = document.getElementById("cnt");
    console.log(id)
    if(id == "hist0"){
        cnt.innerHTML = "\
        <span class=title>Kalendarium systemów operacyjnych</span>\
        1969 r. - Unix</br>\
        1976 r. - Apple I</br>\
        1981 r. - MS Dos</br>\
        1983 r. - Lisa. Pierwsza mysz i interfejs graficzny Apple</br>\
        1984 r. - Macintosh (Mac OS)</br>\
        1985 r. - Microsoft Windows</br>\
        1991 r. - Linux</br>\
        <div class=img-container><img src='./resources/examples.png'></div></br>\
        "
    }else if(id == "hist1") {
        cnt.innerHTML = "\
        <span class=title>Unix</span>\
        <ul>\
        <li>Unix\
        jest przenośnym systemem operacyjnym, przeznaczonym na wiele architektur\
        komputerowych i mającym wiele odmian i modyfikacji. Jego historia ma już przeszło 40 lat. Jej\
        początek datuje się na rok 1966, to data rozpoczęcia prac na Multicsem, systemem, na którym\
        unix bazuje.</li></br></br>\
        <li>Pierwsza wersja systemu operacyjnego Unix powstała w Bell Labs firmy AT&T w stanie New\
        Jersey w 1969 r. na komputery architektury PDP-7 i PDP-9 firmy DEC.</li></br>\
        <li>Jego głównymi autorami byli Ken Thompson i Dennis Ritchie - został napisany najpierw w\
        assemblerze, potem przepisany do C.</li></br>\
        <li>1975 r. - Unix Wersja Szósta - rozprowadzana nieodpłatnie na uczelniach dla zastosowań\
        akademickich.</li></br>\
        <li>Przyczyniło się to do gwałtownego rozwoju systemu, powstawania poza AT&T rozszerzeń i\
        oprogramowania.</li></br>\
        <li>Legendą tego okresu stała się napisana przez profesora Uniwersytetu Nowej Południowej Walii\
        w Australii, Johna Lionsa tzw. Lions Book zawierająca pełny kod wraz z komentarzem wers po\
        wersie.</li></br>\
        <li>Wraz z początkiem lat 80. AT&T zdecydowała się na komercjalizację Uniksa.</li></br>\
        <li>W 1983 roku ukazała się pierwsza wersja komercyjna Uniksa z AT&T, System V.</li></br>\
        <li>AT&T przestała udostępniać kod źródłowy systemu poza licencjami komercyjnymi. Spowodowało\
        to protesty wśród wielu inżynierów akademickich, którzy do tej pory pisali własne rozszerzenia\
        systemu i uczestniczyli w jego rozwoju Blokada nałożona na kod stała się przyczyną powstania na\
        bazie społeczności użytkowników i niezależnych twórców Uniksa ruchu wolnego\
        oprogramowania.</li></br>\
        <li>Założona w 1983 roku przez Richarda Stallmana z Free Software Foundation postawiła sobie za\
        cel stworzenie wolnego systemu uniksowego bez kodu pochodzącego z AT&T.</li></br>\
        <li>W przeciągu lat 80. powstało mnóstwo komercyjnych wersji systemu, ambicją większości firm\
        informatycznych stało się posiadanie własnej odmiany Uniksa.</li></br>\
        <li>Rozdrobnienie systemu na różne wydania i izolacja zespołów programistycznych szybko\
        spowodowały kłopoty ze zgodnością poszczególnych odmian, co zaowocowało staraniami o\
        standaryzację rozwiązań, wywołań i funkcji.</li></br>\
        <li>1988 r. - publikacja standardu POSIX zapewniający zgodność.</li></br>\
        <li>Systemy z rodziny unix obsługiwane są zazwyczaj poprzez edycję wiersza poleceń. W obrębie\
        systemów unix wywodzących się z oryginalnego kodu firmy AT&T wyróżnia się pochodne:\
        Systemu V oraz BSD. Podział ten jednak współcześnie stracił znaczenie z powodu wzajemnych\
        powiązań systemów z rodziny unix.</li></br>\
        <li>Wiele osób, korzystając z poczty elektronicznej, przeglądając listy dyskusyjne czy też zawierając\
        nowe znajomości na kanałach IRC nie zdaje sobie sprawy, że korzysta z usług serwerów\
        uniksowych. Systemy udostępniają użytkownikom swoje zasoby, nie wymagając od nich\
        umiejętności obsługi tych maszyn.</li></br>\
        <li>Dzisiejszy Internet nie istniałby, gdyby nie wysokowydajne komputery oparte na procesorach\
        RISC z zainstalowanymi wielozadaniowymi systemami operacyjnymi typu unix. Unix jest\
        zarejestrowanym znakiem towarowym The Open Group, Liderem, jeśli chodzi o obsługujących\
        witryny sieci Web. Wywarł duży wpływ na dzisiejszą informatykę, tak bezpośredni jak i pośredni.\
        To jemu zawdzięczają swoją popularność język C i reguła KISS. Prekursor nowych technologii\
        takich jak rekursywny system plików i NFS. Po jego poznaniu wiele osób uznaje go za\
        niezastąpiony sposób komunikacji człowieka z komputerem.</li></br>\
        "
    } else if(id == "hist2") {
        cnt.innerHTML = "\
        <span class=title>Apple</span>\
        <ul>\
        <li>Nazwę firmy wymyślił Jobs. Pracował w latach 70 przy zbieraniu jabłek. Nazwa Macintosh to\
        odmiana jabłka (McIntosh)</li></br>\
        <li>Pierwszy komputer firmy to Apple I (1976 r.) - komputer do samodzielnego złożenia. Sukcesem\
        okazał się dopiero rok później Apple II, najlepiej sprzedający się komputer początku lat 80., w\
        większości opracowany przez Steve'a Wozniaka, współzałożyciela firmy.</li></br>\
        <li>Komputery te jednak sporo kosztowały.</li></br>\
        <span class=title>Pierwszy interfejs graficzny</span>\
        <li>Wynalazcą GUI (ang. Graphical User Interface) i myszki była firma Xerox, sprzedała ona jednak\
        prawa firmie Apple.</li></br>\
        <li>Apple rozwinął ideę xerox i w 1983 roku ukazał się pierwszy komputer z GUI oraz myszką\
        komputerową - Lisa, po nim w 1984 r. - Macintosh (Mac), który osiągnął jeszcze większy sukces\
        handlowy. Obecnie klasa osobistych desktopów Apple’a nosi nazwę iMac.</li></br>\
        <span class=title>Systemy firmy apple</span>\
        <li>Apple starało się opatentować wygląd i wrażenia swego systemu. Mimo że interfejs MacOS był\
        bardzo intuicyjny i wygodny, sam system cierpiał na wiele bolączek jak np. brak\
        wielozadaniowości czy w pełni bezpiecznej pamięci.</li></br>\
        <li>W 1991r. - pierwsza generacja PowerBooków.</li></br>\
        <li>Od 2001 komputery Apple sprzedawane są z systemem operacyjnym Mac OS X opartym na\
        mikrojądrze Mach i BSD.</li></br>\
        <li>Mac OS X jest zgodny ze standardem POSIX oraz party o całkiem nowe rozwiązania systemowe.\
        Wprowadzono w nim wiele możliwości, aby zapewnić stabilną platformę od Mac OS 9, np.\
        wywłaszczeniowa wielozadaniowość i ochrona pamięci.</li></br>\
        <li>W 2006 roku Apple ze względu na wydajniejsze i energooszczędniejsze procesory Intel, skłania\
        się ku implementacji ich w laptopach (wcześniej PowerPC).</li></br>\
        </ul>\
        "
    } else if(id == "hist3") {
        cnt.innerHTML = "\
        <span class=title>Microsoft</span>\
        <ul>\
        <li>Microsoft to firma założona przez Billa Gatesa i Paula Allena w 1975 r.</li></br>\
        <li>W roku 1981 firma wydała na świat MS DOS - nie był on systemem wielozadaniowym, nie\
        posiadał zarzadzania pamięcią ani ochrony pamięci./li></br>\
        <li>ierwsza wersja Microsoft Windows w wersji została wydana dopiero roku 1985, była nakładką\
        graficzną na MS DOS.</li></br>\
        <li>Ciekawostką jest, że pierwszy Windows nie posiadł kosza ponieważ patent na to rozwiązanie\
        miała firma Apple.</li></br>\
        <li>Microsoft Windows w wersji 2.0 ukazał się w roku 1987, pojawił się razem z nim MS Excel i MS\
        Word.</li></br>\
        <li>Windows 3.0 został wydany w 1990 roku i został sprzedany w ilości 10 mln kopii -\
        zaimplementowano tu mechanizm pamięci wirtualnej.</li></br>\
        <li>Windows 3.1 - pierwszy Windows z polską wersją językową.</li></br>\
        <li>1995 r. - Windows '95.</li></br>\
        <li>1998 r. - rozpoczęła się sprzedaż Windowsa '98 z nowym system plików FAT32.</li></br>\
        <li>2000 r. - Windows Millenium Edition z funkcją przywracania systemu i automatycznymi\
        aktualizacjami. Mało stabilny, jako ostatni opierał się na MS DOS.</li></br>\
        <li>2001 r. - Ukazuje się Windows XP. Windows XP chociaż ma już sporo lat wciąż jest lepiej oceniany\
        przez użytkowników kolejna Vista i Windows 7 beta. Windows XP został wydany w wielu\
        edycjach, np. Home Edition.</li></br>\
        <li>2003 r. - Windows Server 2003.</li></br>\
        <li>2006 r. - Windows Vista wyposażony w zupełnie nowy interfejs graficzny. Nie zyskuje zbyt wiele\
        uznania.</li></br>\
        <li>2008 r. - Microsoft Windows Server 2008</li></br>\
        <li>2009 r. - Microsoft Windows 7</li></br>\
        <li>2012 r. - Microsoft Windows Server 2012 i Windows 8</li></br>\
        <li>2013 r. - Microsoft Windows 8.1</li></br>\
        <li>2015 r. - Microsoft Windows 2010</li></br>\
        </ul>\
        "
    } else if(id == "hist4") {
        cnt.innerHTML = "\
        <span class=title>Linux</span>\
        <ul>\
        <li>Nie był oryginalnie zaprojektowany jako przyjazny dla użytkownika, wzorował się na uniksie.\
        Został stworzony przez grupę ludzi współpracujących przez Internet.</li></br>\
        <li>Pomysłodawcą był Linus Torvalds. Rozczarowany możliwościami DOSa rozpoczął projekt od\
        podstaw nad własnym systemem w 1991 r. , w 1992 r. pojawiła się pierwsza jego wersja,\
        dostępna bez opłat dla wszystkich zainteresowanych.</li></br>\
        <li>Linux zawiera większość mechanizmów znanych z Uniksa oraz całkiem nowe. Jest kompatybilny z\
        większością standardów Unix na poziomie źródłowym (biblioteki, jądro, sterowniki, programy\
        użytkowe). Jednak podstawowy kod (jądro) Linuksa wzbogacany jest przez różne organizacje i\
        dostawców komercyjnych.</li></br>\
        <li>W wyniku tego procesu tworzone są formy dystrybucyjne systemu. Linux pracuje na szeregu\
        różnych platform. Licencje systemów. Błędy wykrywano natychmiast, licencja jasna, niska cena.</li></br>\
        <li>Początkowo, Linux był jedynie systemem tekstowym, tak jak DOS. Wkrótce jednak pojawiła się\
        do niego nakładka Xwindows, która pozwalała na używanie myszki I poruszanie się\
        w intuicyjnym systemie graficznym\
        </br>\</br>\
        Linux jest popularnym środowiskiem programowym o otwartym źródle, konkurującym z\
        systemami Microsoft Windows i Apple Macintosh. Składa się z czterech głównych elementów:</br>\</br>\
        <li>Jądra (kernel)\
        Jest to system operacyjny niskiego poziomu, zajmujący się obsługą plików, dysków, sieci\
        komputerowej i innych elementów, które uznajemy za oczywiste.</li></br>\
        <li>Dostarczonych programów\
        Są tysiące programów przeznaczonych do manipulacji plikami, edycji tekstów, obliczeń\
        matematycznych, składu dokumentów, obróbki audio i wideo, programowania, tworzenia stron\
        WWW, szyfrowania, zapisu płyt CD... wybór jest niemal nieograniczony.</li></br>\
        <li>Powłoki (shell)\
        To interfejs użytkownika, pozwalający wpisywać polecenia, wykonywać je i wyświetlać wyniki.\
        Istnieje cała gama powłok dla Linux.</li></br>\
        <li>Systemu X\
        Jest to system graficzny, pozwalający na obsługę okien, menu, ikon, myszy i innych elementów\
        typowych dla interfejsów GUI (Graphical User Interface — Graficzny Interfejs Użytkownika). Na\
        bazie systemu X budowane są bardziej złożone środowiska graficzne; najbardziej znane z nich to\
        KDE i GNOMEli></br>\
        </ul>\
        "
    } else if(id == "defin") {
        cnt.innerHTML = "\
        <span class=title>Definicje</span>\
        <ul>\
        <li>Pojęcie systemu operacyjnego jest trudne do zdefiniowania w zwartej formie.</li></br>\
        <li>Krótki opis jest zbyt ogólny, żeby określić rolę i sposób działania tego\
        specyficznego oprogramowania. Podobnie, trudne jest określenie elementów\
        składowych systemu operacyjnego czyly jednoznaczne oddzielenie\
        oprogramowania systemowego od aplikacyjnego</li></br>\
        <li>Dalej podane zostaną bardzo ogólne\
        formułowanym przez różnych autorów.</li></br>\
        <li>Definicje te pojawiały się na przestrzeni około 40 lat, co odzwierciedla\
        w pewnym sensie sposób postrzegania roli i zadań systemu operacyjnego.</li></br>\
        <li><b>Per Brinch Hansen</b></br>\
        System operacyjny jest zbiorem ręcznych i automatycznych procedur, które pozwalają\
        grupie osób na efektywne współdzielenie urządzeń maszyny cyfrowej.</li></br>\
        <li><b>Alan Shaw</b></br>\
        System operacyjny (nadzorczy, nadrzędny, sterujący) jest to zorganizowany zespół\
        programów, które pośredniczą między sprzętem a użytkownikami, dostarczając\
        użytkownikom zestawu środków ułatwiających projektowanie, kodowanie,\
        uruchamianie i eksploatację programów oraz w tym samym czasie sterują\
        przydziałem zasobów dla zapewnienia efektywnego działania.</li></br>\
        <li>Abraham Silberschatz\
        System operacyjny jest programem, który działa jako pośrednik między\
        użytkownikiem komputera a sprzętem komputerowym. Zadaniem systemu\
        operacyjnego jest tworzenie środowiska, w którym użytkownik może wykonywać\
        programy w sposób wygodny i wydajny.</li></br>\
        <li><b>Andrew Tanenbaum</b></br>\
        System operacyjny jest warstwą oprogramowania operującą bezpośrednio na\
        sprzęcie, której celem jest zarządzanie zasobami systemu komputerowego\
        i stowrzenie urzytkownikowi środowiska łatwiejszego do zrozumienia i wykorzystania</li></br>\
        <li>System operacyjny pośredniczy pomiędzy użytkownikiem a sprzętem,\
        dostarczając wygodnego środowiska do wykonywania programów.</li></br>\
        <li>Użytkownik końcowy korzysta z programów (aplikacji), na potrzeby\
        których przydzielane są zasoby systemu komputerowego.</li></br>\
        <li>Przydziałem tym zarządza system operacyjny, dzięki czemu można uzyskać\
        stosunkowo duży stopień niezależności programów od konkretnego sprzętu\
        oraz odpowiedni poziom bezpieczeństwa i sprawności działania.</li></br>\
        <li>Nie ma precyzyjnego określenia, które składniki wchodzą w skład systemu\
        operacyjnego jako jego części.</li></br>\
        <li>Najczęściej akceptuje się definicję marketingową, zgodnie z którą to\
        wsyzstko, co producent udostępnia w ramach zbioru oprogramowania nazywanego\
        systemem operacyjnym, stanowi jego cześć.</li></br>\
        <li>(Podejście takie było przyczyną wielu problemów prawnych firmy Microsoft)</li></br>\
        <span class=title>Podsumowanie</span>\
        <li>System operacyjny (OS - Operating System) - Jest to oprogramowanie umożliwiające\
        komunikację pomiędzy użytkownikiem a sprzętem komputerowym oraz tworzące\
        środowisko do uruchamiania i pracy innych aplikacji.</li></br>\
        </br></br>Do głównych zadań systemu operacyjnego (a dokładniej jego jądra) należy:</br>\
        <li>Zarządzanie zasobami komputera: procesorem, pamięcią, urządzeniami peryferyjnymi\
        (obsługa sprzętu oraz zapewnienie równolegle wykonywanym zadaniom jednolitego\
        dostępu do sprzętu)</li></br>\
        <li>lanowanie oraz przydział czasu procesora poszczególnym zadaniom.</li></br>\
        <li>Kontrola i przydział pamięci operacyjnej dla uruchomionych zadań.</li></br>\
        <li>Koordynacja pracy urządzeń wewnętrznych i zewnętrznych.</li></br>\
        <li>Ochrona danych i pamięci - tak aby jeden z uruchomionych programów, w wyniku</li></br>\
        <li>błędu lub zamierzonego działania nie blokował innych programów i całego sytemu.</li></br></br>\
        </br></br>System operacyjny zarządza:</br></br>\
        <li>Procesorem - przydziela czas procesora dla poszczególnych zadań</li></br>\
        <li>Pamięcią - przydziela przestrzeń adresową dla poszczególnych programów</li></br>\
        <li>Systemem plików - udostępnia dane, zarządza prawami dostępu</li></br>\
        <li>Urządzeniami zewnętrznymi - udostępnia i zarządza urządzeniami pamięci masowej,\
        przydziela przestrzeń dyskową, udostępnia urządzenia peryferyjne</li></br>\
        <ul/>\
        "
    } else if(id=="arch") {
        cnt.innerHTML = "\
        <span class=title>Architektura systemu operacyjnego</span>\
        <div class=img-container><img src='./resources/architecture1.png'></div></br>\
        <ul>\
        <li>W ogólnym przypadku w strukturze systemu operacyjnego wyróżnia się jądro oraz\
        programy systemowe, które dostarczane są razem z systemem operacyjnym, ale nie\
        stanowią integralnej części jądra.</li></br>\
        <li>Jądro jest zbiorem modułów, które ukrywają szczegóły sprzętowej realizacji systemu\
        komputerowego, udostępniając pewien zestaw usług, wykorzystywanych między innymi\
        do implementacji programów systemowych.</li></br>\
        <li>W dalszej części system operacyjny będzie rozumiany głównie jako jądro, i inne\
        elementy oprogramowania integralnie związane z funkcjonowaniem jądra.</li></br>\
        <li>Z punktu widzenia kontaktu z użytkownikiem istotny jest interpreter poleceń (powłoka),\
        który może być częścią jądra lub programem systemowym (np. w systemach\
        UNIX/Linux).</li></br>\
        <li>Interpreter wykonuje pewne polecenia wewnętrznie, tzn. moduł lub program\
        interpretera dostarcza implementacji tych poleceń.</li></br>\
        <li>Jeśli interpreter nie może wykonać wewnętrznie jakiegoś polecenia, uruchamia\
        odpowiedni program (polecenie zewnętrzne), jako odrębny proces.</li></br>\
        <li>Jądro systemu operacyjnego\
        (ang. kernel, OS kernel)</li></br>\
        <li>Program komputerowy będący podstawą (rdzeniem) systemu operacyjnego, mający\
        całkowitą kontrolę nad systemem komputerowym.</li></br>\
        <li>Jest pierwszym uruchamianym programem (zaraz po programie uruchamiającym).</li></br>\
        <li>Odpowiada za obsługę procesu uruchomienia, obsługę urządzeń wejścia/wyjścia, pracę\
        z pamięcią i pamięcią masową, itd.</li></br>\
        <li>Jądro jest warstwą łączącą sprzęt z oprogramowaniem.\
        Realizuje najczęściej wykonywane zadania w systemie operacyjnym, np. wykonanie zapisu\
        pliku, odczyt danych z pamięci, przetwarzanie danych otrzymanych z karty sieciowej itp.</li></br>\
        <span class=title>Przykładowe zadania jądra systemu operacyjnego</span></br>\
        <li>obsługa procesów (uruchamianie, wstrzymywanie, przełączanie, zatrzymywanie, ...)\
        najważniejsze zadanie jądra,</li></br>\
        <li>obsługa urządzeń i ich przerwań,</li></br>\
        <li>zarządzanie zasobami komputera,</li></br>\
        <li>zarządzanie pamięcią,</li></br>\
        <li>zarządzanie pamięcią masową,</li></br>\
        <li>obsługa sieci.</li></br>\
        <div class=img-container><img src='./resources/kernel.png'></div></br>\
        </br></br>Rodzaje jąder:</br>\
        <li>Jądra monolityczne zawierają wszystkie podstawowe funkcje systemu operacyjnego oraz\
        sterowniki urządzeń. Często pozwalają ładować dodatkowe moduły w trakcie pracy, np. w celu\
        obsługi nowego urządzenia. Znajdziemy je w systemach uniksowych.</li></br>\
        <li>Mikrojądra zwykle udostępniają konieczne minimum: obsługę pamięci, procesów. Pozostałe\
        funkcje muszą zostać zaimplementowane jako osobne programy korzystające z jądra. Znajdziemy\
        je w systemach takich, jak BeOS, MINIX; przykładem takiego jądra jest Mach.</li></br>\
        <li>Jądra hybrydowe są podobne do mikrojąder, ale zawierają dodatkowy kod w przestrzeni jądra,\
        dzięki czemu programy mogą się wykonywać szybciej niż w normalnym trybie. Łączą cechy obu\
        powyższych. Nie należy ich mylić z monolitycznymi (mogącymi ładować moduły po\
        uruchomieniu). Jądra te znajdziemy m. in. w systemach Windows NT i nowszymi (także Windows\
        10) czy macOS (jądro nosi nazwę XNU - X is Not Unix).</li></br>\
        </ul>\
        "
    } else if(id == "oper") {
        // <li>Definicja interfejsu użytkownika.</li></br>\
        // <li>Udostępnianie środowiska do wykonywania programów użytkownika:</li></br>\
        // mechanizm ładowania i uruchamiania programów,</br>\
        // mechanizmy synchronizacji i komunikacji procesów.</br>\
        // <li>Sterowanie urządzeniami wejścia-wyjścia.</li></br>\
        // <li>Obsługa podstawowej klasy błędów.</li></br>\
        cnt.innerHTML = "\
        <span class=title>Zadania systemu operacyjnego</span>\
        <ul>\
        <li>Definiowanie interfejsu użytkownika - system operacyjny dostarcza użytkownikom zbiór\
        poleceń lub system okienkowy wraz z odpowiednim menu, który umożliwia interakcję\
        z systemem komputerowym.</li></br>\
        <li>Udostępnianie systemu plików - system operacyjny organizuje i ułatwia dostęp do\
        informacji np. w postaci hierarchicznego systemu plików.</li></br>\
        <li>Udostępnianie środowisko do wykonywania programów: system operacyjny dostarcza\
        struktur danych do organizacji wykonywania programu oraz zachowywania i odtwarzania\
        stanu przetwarzania (procesy i przełączanie kontekstu).</li></br>\
        <li>System operacyjny udostępnia też programistom mechanizmy komunikacji pomiędzy\
        procesami (kolejki komunikatów, strumienie, pamięć współdzielona) oraz mechanizmy\
        synchronizacji procesów (semafory, muteksy).</li></br>\
        <li>Sterowanie urządzeniami wejścia-wyjścia - odpowiednie moduły sterujące, integrowane\
        z systemem operacyjnym, inicjalizują pracę urządzeń zewnętrznych oraz pośredniczą\
        w efektywnym przekazywaniu danych pomiędzy jednostką centralną a tymi urządzeniami.</li></br>\
        <li>Obsługa podstawowej klasy błędów - system operacyjny reaguje na błędy użytkowników\
        (niedostępność zasobów, brak prawa dostępu), programistów ( błąd dzielenia przez 0,\
        naruszenie ochrony pamięci, nieprawidłowy kod rozkazu) oraz systemu (błąd braku strony\
        pamięci, błąd magistrali).</li></br>\
        <li>Efektywność zarządzania zasobami oraz wygodny interfejs dla użytkownika są dwoma\
        ogólnymi, niezależnymi celami projektowymi systemów operacyjnych.</li></br>\
        <li>Pierwszy z tych celów był kluczowy w rozwoju rodziny systemów uniksowych.</li></br>\
        <li>Dopiero w późniejszych etapach ich rozwoju pojawił się intuicyjny okienkowy interfejs\
        użytkownika.</li></br>\
        <li>Systemy rodziny MS Windows zorientowane były natomiast przede wszystkim na interfejs\
        użytkownika, na bazie którego w późniejszych etapach rozwoju powstawał pełnowartościowy\
        system operacyjny, uwzględniający szerzej rozumiane zarządzanie zasobami.</li></br>\
        </ul>\
        "        
    } else if(id=="manag") {
        cnt.innerHTML = "\
        <span class=title>Zarządzanie zasobami systemu</span>\
        Na nasze potrzeby, zasób będzie rozumiany intuicyjnie jako element systemu</br>\
        komputerowego istotny, czy wręcz kluczowy dla realizacji przetwarzania.</br>\
        Funkcja zarządzania zasobami nie jest bezpośrednio wykorzystywana przez użytkownika</br>\
        (czasami nie jest przez niego w ogóle dostrzegana).</br>\
        Jej celem jest optymalizacja wykorzystania zasobów przez użytkowników.</br>\
        <ul>\
        <li>Przydział zasobów - realizacja żądań dostępu do zasobów w taki sposób, że zasoby używane\
        są zgodnie z intencją użytkowników (np. zagwarantowanie wyłącznego dostępu drukarki).</li></br>\
        <li>Planowanie dostępu do zasobów - strategia przydziału zasobów gwarantująca\
        bezpieczeństwo, żywotność, brak zakleszczenia, sprawiedliwość oraz optymalność ich\
        wykorzystania.</li></br>\
        <li>Warto zwrócić uwagę na odróżnienie planowania od samego przydziału - przydział oznacza\
        powiązanie zasobu z realizowanym zadaniem, podczas gdy planowanie wiąże się\
        z podejmowaniem decyzji odnośnie wyboru zdania, któremu zasób będzie przydzielony.</li></br>\
        <li>Ochrona i autoryzacja dostępu do zasobów - dopuszczanie możliwości użytkowania zasobu\
        tylko przez osoby uprawnione i w zakresie przydzielonych im uprawnień.</li></br>\
        <li>Odzyskiwanie zasobów - dołączanie zwolnionych zasobów do zbioru zasobów wolnych po\
        zakończeniu ich użytkowania.</li></br>\
        <li>Rozliczanie - rejestrowanie i udostępnianie informacji o wykorzystaniu zasobów w celach\
        kontrolnych i rozrachunkowych.</li></br>\
        </br></br>Typowymi zasobami zarządzanymi przez system operacyjny są:</br>\
        <li>Procesor - przydział czasu procesora.</li></br>\
        <li>Pamięć - alokacja przestrzeni adresowej dla procesorów, ochrona i transformacja adresów</li></br>\
        <li>Urządzenia wejścia-wyjścia - Udostępnianie i sterowanie urządzeniami pamięci masowej,\
        alokacja przestrzeni dyskowej, udostępnianie i sterowanie drukarkami, skanerami itp.</li></br>\
        <li>Informacja (system plików) - organizacja i udostępnianie informacji, \
        ochrona i autoryzacja dostępu do informacji</li></br>\
        </br></br>Procesor jest zasobem współdzielonym przez wiele procesów, w związku z czym/<br>\
        zadaniem systemu operacyjnego jest przydział kwantu czasu procesora/<br>\
        i wywłaszczanie zadania, które:/<br>\
        <li>wykorzystało już swój czas,</li></br>\
        <li>ie może kontynuować przetwarzania ze względu na brak innych zasobów\
        (brak gotowości urządzeń wejścia-wyjścia),</li></br>\
        <li>ma zbyt niski priorytet.</li></br>\
        <li>Pamięć jest zasobem, który przydzielany jest na wyłączność danego przetwarzania.</li></br>\
        <li>Zadaniem systemu jest zatem utrzymywanie informacji o zajętości przestrzeni\
        adresowej, znajdowanie i przydzielanie odpowiednich fragmentów wolnej pamięci\
        na żądanie aplikacji użytkownika lub innych modułów systemu operacyjnego oraz\
        reagowanie na naruszenie ochrony pamięci.</li></br>\
        <li>System operacyjny pośredniczy również w transformacji adresów wirtualnych na\
        fizyczne w systemach z segmentacją lub stronicowaniem przez organizację tablicy\
        segmentów lub stron oraz obsługę błędów strony.</li></br>\
        <li><Urządzenia zewnętrzne są stosunkowo wolne, w związku z czym, w celu poprawy\
        efektywności, zarządzanie tymi urządzeniami wymaga odpowiedniej organizacji\
        systemu przerwań oraz buforowania danych, ewentualnie spoolingu./li></br>\
        <li>Osobnym zagadnieniem jest zarządzanie urządzeniami pamięci masowej, zwłaszcza\
        odpowiednia organizacja przestrzeni dyskowej oraz optymalizacja ruchu głowic\
        dyskowych.</li></br>\
        <li>Informacja jest z punktu widzenia użytkownika najważniejszym zasobem, gdyż jej\
        przetwarzanie jest celem systemu komputerowego. System operacyjny odpowiada za\
        organizację gromadzenia i udostępniania informacji, jej ochronę przed nieuprawnioną\
        ingerencją, spójność w przypadku awarii itp.</li></br>\
        <ul/>\
        "
    }else if(id=="othr") {
    cnt.innerHTML = "\
    <span class=title>Inne rodzaje systemów operacyjnych</span>\
    Systemy czasu rzeczywistego (real-time systems)\
    zorientowane na przetwarzanie z uwzględnieniem czasu zakończenie zadania, tzw. Linii\
    krytycznej (deadline).</br>\
    Systemy sieciowe i rozproszone (network and distributed systems)\
    umożliwiają zarządzanie zbiorem rozproszonych jednostek przetwarzających, czyli\
    zbiorem jednostek (komputerów), które są zintegrowane siecią komputerową i nie\
    współdzielą fizycznie zasobów.</br>\
    Systemy operacyjne komputerów naręcznych\
    tworzone dla rozwiązań typu PDA, czy telefonów komórkowych, podlegają istotnym\
    ograniczeniom zasobowym.</br>\
    "
    }else if(id=="classif1") {
        cnt.innerHTML = "\
        <span class=title>klasyfikacja systemów operacyjnych</span>\
        Systemy przetwarzania bezpośredniego (on-line processing systems)</br>\
        systemy interakcyjne:</br>\
        <ul>\
        <li>występuje bezpośrednia interakcja pomiędzy użytkownikiem a systemem,</li></br>\
        <li>wykonywanie zadania użytkownika rozpoczyna się zaraz po przedłożeniu</br>\
        </ul>\
        Systemy przetwarzania pośredniego (off-line processing systems)</br>\
        systemy wsadowe:</br>\
        <ul>\
        <li>występuje znacząca zwłoka czasowa między przedłożeniem a rozpoczęciem\
        wykonywania zadania,<li></br>\
        <li>niemożliwa jest ingerencja użytkownika w wykonywanie zadania.<li></br>\
        </ul>\
        W przypadku systemu przetwarzania bezpośredniego użytkownik wprowadza zadanie\
        do systemu i oczekuje na wyniki. W trakcie przetwarzania jest zatem możliwa interakcja\
        pomiędzy użytkownikiem a systemem (aplikacją). Użytkownik może być na przykład\
        poproszony o wprowadzenie jakiś danych na terminalu, wybranie czegoś z menu itp.</br>\
        W przypadku przetwarzania pośredniego zadanie jest realizowane w czasie wybranym\
        przez system. Po przedłożeniu zadania ingerencja użytkownika jest niemożliwa. Wszystkie\
        dane muszą być zatem dostępne w momencie przedkładania zadania, a jakikolwiek błąd\
        programowy lub niekompletność danych oznacza konieczność przedłożenia i wykonania\
        zadania ponownie.\
        "
    } else if(id=="classif2") {
        cnt.innerHTML = "\
        <span class=title>klasyfikacja systemów operacyjnych</span>\
        Systemy jednozadaniowe - niedopuszczalne jest rozpoczęcie wykonywania\
        następnego zadania użytkownika przed zakończeniem poprzedniego.</br>\
        Systemy wielozadaniowe - dopuszczalne jest istnienie jednocześnie wielu zadań\
        (procesów), którym zgodnie z pewną strategią przydzielany jest procesor.</br>\
        Bez wywłaszczenia - oczekują na zwolnienie zasobów przez aktualnie wykonywany\
        program; zawieszenie się jednej aplikacji powoduje zawieszenie się całego systemu,\
        np. Windows 3.x, MAC OS do wersji 9</br>\
        Z wywłaszczeniem - pozwalają na wstrzymanie aktualnie wykonywanego zadania,\
        umożliwiając działanie innemu programowi, np. Windows od wersji 95, większość\
        systemów UNIX, Linux</br>\
        Systemy jednoprogramowe\
        zwane też jednozadaniowymi, umożliwiają uruchomienie jednego zadania użytkownika,\
        które ewentualnie może być wykonywane współbieżnie z pewnymi procedurami systemu\
        operacyjnego.</br>\
        Systemy wieloprogramowe (wielozadaniowe)\
        dostarczają mechanizm przełączania kontekstu, umożliwiając w ten sposób zachowanie stanu\
        wykonywania określonego programu (stanu procesu), a następnie odtworzenie stanu\
        wykonywania innego programu (w szczególności innego wykonywania tego samego\
        programu). Przełączenie kontekstu jest skutkiem zwolnienia procesora, które z kolei\
        następuje w wyniku:</br>\
        <ul>\
        <li>żądania przydziału dodatkowego zasobu,</li></br>\
        <li>zainicjowania operacji wejścia-wyjścia,</li></br>\
        <li>przekroczenia ustalonego limitu czasu (kwantu czasu),</li></br>\
        <li>uzyskania gotowości przez inne zadanie (proces) o wyższym priorytecie.</li></br>\
        \
        "
    } else if(id=="classif3") {
        cnt.innerHTML = "\
        <span class=title>klasyfikacja systemów operacyjnych</span>\
        Systemy dla jednego użytkownika\
        zasoby przeznaczone są dla jednego użytkownika, nie ma mechanizmów autoryzacji, a\
        mechanizmy ochrony informacji są ograniczone.</br>\
        Systemy wielodostępne\
        wielu użytkowników może korzystać z zasobów systemu komputerowego, a system\
        operacyjny gwarantuje ich ochronę przed nieupoważnioną ingerencją.</br>\
        W systemach dla jednego użytkownika nie ma problemu autoryzacji, czyli konieczności\
        identyfikowania zleceniodawcy poszczególnych zadań.</br>\
        Mechanizmy ochrony są ograniczone w tym sensie, że nie ma potrzeby ochrony zasobów\
        jednego użytkownika przed drugim użytkownikiem tego samego systemu operacyjnego, ale\
        w czasie powszechności sieci rozległych istnieje jednak problem ochrony zasobów przed\
        ingerencją z zewnątrz.</br>\
        System operacyjny w przypadku wielodostępu musi zagwarantować, że jeden użytkownik\
        nie jest w stanie zakłócić pracy innych użytkowników.</br>\
        Jest to problem właściwego udostępniania zasobów oraz dostępności mechanizmów ochrony\
        prywatnych zasobów jednego użytkownika przed ingerencją innego.</br>\
        \
        "
    } else if(id=="classif4") {
        cnt.innerHTML = "\
        <span class=title>klasyfikacja systemów operacyjnych</span>\
        Systemy z interfejsem znakowym/tekstowym.\
        Komunikacja użytkownika z systemem następuje poprzez wprowadzanie tekstowych komend\
        z wiersza poleceń/terminala, np. MS-DOS, Linux Bash,Windows Server Core.</br>\
        Systemy z okienkowym interfejsem graficznym.\
        GUI - Graphical User Interface.\
        Możliwe jest użytkowanie systemu z wykorzystaniem interfejsu graficznego opartego na\
        symbolach (ikonach) oraz tzw. okienkach określanych skrótem GUI, np. Windows, Mac OS, X\
        Window</br>\
    "
    } else if(id=="build"){
        cnt.innerHTML = "\
        <span class=title>Budowa i zasada działania systemu</span>\
        System operacyjny jest programem, jednak jego działanie jest dość specyficzne, gdyż\
        musi on nadzorować (monitorować) pracę komputera nawet wówczas, gdy wykonywany\
        jest jakiś program aplikacyjny.</br>\
        System operacyjny musi reagować na błędy w programach aplikacyjnych, porządkować\
        system komputerowy po awariach, z kolei błędy w kodzie jądra systemu operacyjnego\
        mogą zdestabilizować funkcjonowanie całego systemu komputerowego.</br>\
        Działanie współczesnych systemów operacyjnych jest rezultatem ewolucji w architekturze\
        sprzętowo-programowej, w której potrzeby w zakresie implementacji pewnych\
        mechanizmów systemu operacyjnego wymuszały wprowadzanie stosownych rozwiązań na\
        poziomie architektury komputera (procesora, jednostki zarządzania pamięcią, układu\
        bezpośredniego dostępu do pamięci, układów wejścia-wyjścia).</br></br>\
        Struktura systemu operacyjnego w ujęciu wielowarstwowym: \
        <div class=img-container><img src='./resources/layerBuild.png'></div></br></br>\
        Działanie systemu komputerowego można opisywać na różnych poziomach abstrakcji,\
        począwszy od zjawisk fizycznych na poziomie układów półprzewodnikowych, czy też\
        propagacji sygnałów logicznych na poziomie układów techniki cyfrowej.\
        Tak niski poziom abstrakcji jest jednak interesujący dla projektantów sprzętu\
        komputerowego.</br>\
        Dla programistów interesujący są poziomy począwszy od poziomu maszynowego procesora.\
        Na poziomie tym definiowana jest lista rozkazów procesora, tryby adresowania pamięci,\
        rejestry procesora.\
        Na poziomie tym nie istnieją jednak takie elementy, jak pliki, procesy, mechanizmy\
        komunikacji i synchronizacji.</br>\
        Te elementy uzupełniane są przez system operacyjny, który współtworzy wraz poziomem\
        maszynowym hybrydową warstwę usług dla programów użytkowych. Na bazie tej warstwy\
        budowane są kolejne poziomy abstrakcji, związane z językami programowania niższego lub\
        wyższego poziomu, usługami i aplikacjami.Te poziomy są interesujące dla administratorów</br>\
        "
    } else if(id=="proc") {
        cnt.innerHTML = "\
        <span class=title>Działania procesora</span>\
        Działania procesora, w zasadzie ogranicza się do wykonywania rozkazów programów\
        (systemu operacyjnego też), które powtarzają się cyklicznie.</br>\
        W związku z czym określa się je jako cykle rozkazowe.</br>\
        Realizacja cyklu rozkazowego wymaga na ogół kilku interakcji procesora z pamięcią.\
        Każdą taką interakcję określa się mianem cyklu maszynowego.\
        W każdym cyklu rozkazowym występuje cykl maszynowy pobrania kodu rozkazu.\
        W zależności od trybu dostępności operandów mogą też wystąpić cykle pobrania operandu\
        z pamięci (albo rejestrów wejścia-wyjścia) lub składowania operandu w pamięci (albo\
        rejestrach wejścia-wyjścia).</br>\
        Każdy cykl maszynowy oznacza zatem zapis lub odczyt pamięci, przy czym cykl pobrania\
        kodu rozkazu oznacza zawsze odczyt.</br></br>\
        śli w taki sposób byłby wykonywany program użytkownika, to nasuwa się pytanie:</br>\
        Gdzie jest miejsce na wykonywanie programu jądra systemu operacyjnego?;\
        W jaki sposób następuje przekazanie sterowania do jądra systemu operacyjnego?</br></br>\
        W czasie wykonywania rozkazu mogły nastąpić pewne zdarzenia zewnętrzne w stosunku\
        do procesora, nie związane z bieżącym cyklem rozkazowym, ale wymagające od procesora\
        jakiejś reakcji.\
        Konieczność reakcji zgłaszana jest poprzez sygnał na odpowiedniej linii wejściowej\
        procesora.\
        Ostatnia faza cyklu rozkazowego polega zatem na sprawdzeniu, czy wystąpiło takie\
        zgłoszenie.</br></br>\
        Jeśli nie było zgłoszenia, rozpoczyna się następny cykl maszynowy.</br>\
        Jeśli jednak było zgłoszenie - nazywane przerwaniem, następuje ciąg działań, zmierzających\
        do zidentyfikowania źródła przerwania, a następnie przekazania sterowania do stosownej\
        procedury obsługi.\
        Procedury obsługi przerwań są częścią programu jądra systemu operacyjnego.\
        Przerwania można podzielić na:</br>\
        <ul>\
        <li>zewnętrzne - pochodzące z układów na zewnątrz procesora, czyli od urządzeń wejścia-\
        wyjścia, czasomierzy, układu bezpośredniego dostępu do pamięci itp.,<li></br>\
        <li>wewnętrzne (diagnostyczne) - zgłaszane przez procesor, będące następstwem wykrycia\
        jakiegoś stanu wyjątkowego,<li></br>\
        <li>programowe - wynikające z wykonania specjalnej instrukcji procesora, umożliwiające\
        programom użytkownika dostęp do wybranych funkcji jądra systemu operacyjnego.<li></br>\
        </ul>\
        Przerwania od urządzeń zewnętrznych zgłaszane są po zakończeniu operacji wejścia-\
        wyjścia i przekazywane na specjalne wejście procesora najczęściej przez sterownik\
        przerwań.</br>\
        Tą samą ścieżką zgłaszane są również przerwania od układów ściśle współpracujących\
        z procesorem – czasomierzy, układów bezpośredniego dostępu do pamięci itp. Są to typowe\
        przerwania, gdyż ich źródło jest poza procesorem i jest od niego niezależne.</br>\
        W przeciwieństwie do przerwań zewnętrznych, przerwania programowe są wynikiem\
        wykonania specjalnej instrukcji procesora.</br>\
        Przerwania diagnostyczne są z kolei generowane wewnętrznie przez procesor w sytuacji\
        zajścia określonego stanu. Są zatem pośrednim skutkiem wykonania określonego ciągu\
        rozkazów prowadzących do osiągnięcia tego stanu. Tego typu przerwania można traktować\
        jak pułapki lub wyjątki.</br>\
        System przerwań umożliwia niesekwencyjne (współbieżne) wykonywanie programów.</br>\
        Zmiana sekwencji wykonywania instrukcji polega na tym, że w reakcji na przerwanie\
        następuje zapamiętanie bieżącego stanu przetwarzania (najważniejszych rejestrów\
        procesora), przekazanie sterowania do ustalonej procedury obsługi i rozpoczęcie\
        wykonywania instrukcji tej procedury.</br>\
        W szczególności może to prowadzić do przełączenia kontekstu, czyli przekazania\
        sterowania po zakończeniu procedury obsługi przerwania do innego przetwarzania, niż to\
        które zostało przerwane.</br>\
        "
    } else if(id == "wrkLvl") {
        cnt.innerHTML = "\
        <span class=title>Poziomy pracy</span>\
        Stabilność pracy systemu wymaga ochrony przynajmniej jądra systemu operacyjnego przed\
        niekontrolowaną ingerencją użytkowników.</br>\
        Wymaga to monitorowania odniesień do pamięci i weryfikowania poprawności adresów.\
        Ze względów wydajnościowych zadanie to realizowane jest sprzętowo, ale odpowiednie dane\
        na potrzeby weryfikacji musi dostarczyć system.</br>\
        W celu zabezpieczenia tych (i innych) newralgicznych danych wyróżnione są pewne\
        instrukcje uprzywilejowane, niedostępne dla programów aplikacyjnych.</br>\
        Powstaje jednak problem odróżnienia programów systemowych od aplikacyjnych, którego\
        rozwiązaniem jest wyodrębnienie dwóch (w niektórych procesorach nawet większej liczby)\
        poziomów pracy (trybów pracy).</br>\
        Możliwe staje się narzucenie sprzętowych restrykcji odnośnie wykonywania niektórych\
        instrukcji na odpowiednich poziomach.</br>\
        </br></br>\
        tryby pracy procesora:\
        <div class=img-container><img src='./resources/cpuWork.png'></div></br>\
        Proces użytkownika uruchamiany jest w trybie nieuprzywilejowanym, w związku\
        z czym nie może wykonać pewnych instrukcji, dostępnych tylko w trybie\
        uprzywilejowanym, tym samym ma ograniczoną możliwość swobodnego ingerowania\
        w obszary zastrzeżone dla jądra systemu operacyjnego</br>\
        W najprostszym przypadku wystarczą dwa tryby, ale większa ich liczba może usprawnić\
        tworzenie oprogramowania systemowego</br>\
        W trybie najbardziej uprzywilejowanym (trybie jądra) dostępne są wszystkie\
        instrukcje i rejestry procesora</br>\
        W każdym następnym (mniej uprzywilejowanym) trybie jest coraz mniej dostępnych\
        instrukcji lub rejestrów.\
        Procesor pracuje zatem zawsze w jednym z trybów uprzywilejowania</br>\
        Program jądra wykonywany jest w trybie najbardziej uprzywilejowanym, z którego można\
        się przełączyć w tryb mniej uprzywilejowany, co ma miejsce przy uruchamianiu programu\
        aplikacyjnego</br>\
        Powrót do trybu uprzywilejowanego możliwy jest poprzez odpowiednie przerwania (lub\
        podobne mechanizmy), ale procedura obsługi przerwania dostarczona jest przez jądro</br>\
        Program użytkownika nie może zatem zmienić trybu pracy na potrzeby wykonania\
        dowolnego własnego kodu</br>\
        "
    } else if(id=="pros") {
        cnt.innerHTML = "\
        <span class=title>Poziomy pracy</span>\
        Wielozadaniowość (multitasking).</br>\
        Umożliwia pracę wielu procesów na zasadzie dzielenia czasu mikroprocesora.</br>\
        Wielodostępność (multiuser).</br>\
        Umożliwia pracę wielu użytkowników systemu operacyjnego w tym samym czasie.</br>\
        Wielowątkowość (multithreading).</br>\
        Umożliwia wykonanie jednego procesu w ramach kilku wątków.</br>\
        Wielobieżność (reentrant).</br>\
        Kilka procesów może mieć dostęp do interfejsu jądra (praca w trybie jądra), dzięki czemu\
        wszystkie mogą korzystać z funkcji systemowych.</br>\
        Skalowalność (scalability).</br>\
        Cecha ta opisuje możliwość łatwej rozbudowy elementów systemu operacyjnego. Ważne jest,\
        aby mimo zwiększania objętości systemu nie spadła jego wydajność.</br>\
        Wywłaszczenie.</br>\
        Technika ta pozwala na wstrzymanie jednego procesu, aby umożliwić uruchomienie innego.\
        Zawieszenie jednego procesu nie wstrzymuje całego systemu operacyjnego.</br>\
        Odporność na błędy</br>\
        systemu jest związana z cechą wywłaszczania procesów.\
        "     
    }
}