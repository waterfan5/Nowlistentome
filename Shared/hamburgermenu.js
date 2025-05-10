   /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */



   function HamburgerMenu_Open() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
         x.style.display = "none";
      }

      else {
         x.style.display = "block";
      }

   }

function trackEvent(event, param1="", param2="") {
    const url = new URL('/server/track.ashx', window.location.origin);
    var page = document.title.replace(" ", "");
    url.searchParams.append('pg', page);
    url.searchParams.append('ev', page + "_" + event);
    url.searchParams.append('p1', param1);
    url.searchParams.append('p2', param2);

    fetch(url)
        .catch(error => console.error("Error tracking event:", error));
}

function HamburgerMenu_Init() {
    trackEvent("open");
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-1T547128ND');

   var ref;
   var links = document.getElementById("myLinks");
    ref = document.createElement("a");
    ref.text = "*Home* - (See All)";
    ref.setAttribute("href", "/index.html");
    links.appendChild(ref);

    ref = document.createElement("a");
    ref.text = "Anagram Helper";
    ref.setAttribute("href", "../anagramhelper/index.html");
    links.appendChild(ref);

   ref = document.createElement("a");
   ref.text="Base Converter";
   ref.setAttribute("href", "../baseconverter/index.html");
    links.appendChild(ref);

    ref = document.createElement("a");
    ref.text = "Binary Attack";
    ref.setAttribute("href", "../binaryattack/index.html");
    links.appendChild(ref);

    ref = document.createElement("a");
    ref.text = "Book Cipher";
    ref.setAttribute("href", "../bookcipher/index.html");
    links.appendChild(ref);

    ref = document.createElement("a");
    ref.text = "Coordinate Generator";
    ref.setAttribute("href", "../coordgen/index.html");
    links.appendChild(ref);

    ref = document.createElement("a");
    ref.text = "Digital Clock";
    ref.setAttribute("href", "../digitalclock/index.html");
    links.appendChild(ref);

    ref = document.createElement("a");
    ref.text = "Expand Text";
    ref.setAttribute("href", "../expandtext/index.html");
    links.appendChild(ref);

   ref = document.createElement("a");
   ref.text="Geo Calculator";
   ref.setAttribute("href", "../geocalc/index.html");
    links.appendChild(ref);

    ref = document.createElement("a");
    ref.text = "Grid Paint";
    ref.setAttribute("href", "../gridpaint/index.html");
    links.appendChild(ref);

   ref = document.createElement("a");
   ref.text="Highlighter";
   ref.setAttribute("href", "../highlighter/index.html");
   links.appendChild(ref);

   ref = document.createElement("a");
   ref.text="HTML Extractor";
   ref.setAttribute("href", "../htmlextract/index.html");
   links.appendChild(ref);

   ref = document.createElement("a");
   ref.text="Pattern Detector";
   ref.setAttribute("href", "../patterndetector/index.html");
    links.appendChild(ref);

   ref = document.createElement("a");
   ref.text="Rotate and Bash";
   ref.setAttribute("href", "../rotbash/index.html");
    links.appendChild(ref);

    ref = document.createElement("a");
    ref.text = "Quick Lookup";
    ref.setAttribute("href", "../quicklookup/index.html");
    links.appendChild(ref);

    ref = document.createElement("a");
    ref.text = "Solve ABC";
    ref.setAttribute("href", "../solveabc/index.html");
    links.appendChild(ref);

    ref = document.createElement("a");
    ref.text = "Substitution Tester";
    ref.setAttribute("href", "../subtest/index.html");
    links.appendChild(ref);

   ref = document.createElement("a");
   ref.text="Text Analyzer";
   ref.setAttribute("href", "../textanalyzer/index.html");
    links.appendChild(ref);

    ref = document.createElement("a");
    ref.text = "Transform Text";
    ref.setAttribute("href", "../transformtext/index.html");
    links.appendChild(ref);

}

