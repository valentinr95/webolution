import React from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

let day = new Date().getDate();
let firma = "webolution Mödling (Jakob Langmaier und Valentin Röcklinger)";
(day%2 === 0) ? firma="webolution Mödling (Jakob Langmaier und Valentin Röcklinger)" : firma="Webolution Mödling (Valentin Röcklinger und Jakob Langmaier)";


function Informationen() {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <div className="dsgvo-style">
        <h1 style={{textAlign: "center"}}>Erklärung zur Informationspflicht </h1>
        <h2 style={{textAlign: "center"}}>(Datenschutzerklärung)</h2>
        <br />
        <p>
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre
            Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
            In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der
            Datenverarbeitung im Rahmen unserer Website.
            Kontakt mit uns
            Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden
            Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
            sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p><strong>Cookies</strong></p>
          <p>
            Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien,
            die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden
            an.
            Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben
            auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser
            beim nächsten Besuch wiederzuerkennen.
            Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das
            Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben.
            Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
          </p>
          <p><strong>Web-Analyse</strong></p>
          <p>
            Unsere Website verwendet Funktionen des Webanalysedienstes Google Analytics, Contract
            Administration Department Google Ireland Ltd Gordon House Barrow Street Dublin 4 Irland.
            Dazu werden Cookies verwendet, die eine Analyse der Benutzung der Website durch Ihre
            Benutzer ermöglicht. Die dadurch erzeugten Informationen werden auf den Server des
            Anbieters übertragen und dort gespeichert.
            Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“).
            Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert
            werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch das
            Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an
            einen Server von Google in den USA übertragen und dort gespeichert.
          </p>
          <p>
            Im Falle der Aktivierung der IP-Anonymisierung auf dieser Website, wird Ihre IP-Adresse von
            Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
            Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.
            Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA
            übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese
            Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
            Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der
            Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.
            Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht
            mit anderen Daten von Google zusammengeführt.
          </p>
          <p>
            Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer BrowserSoftware verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls
            nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können
            darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der
            Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser
            Daten durch Google verhindern, indem Sie das unter dem folgenden Link
            (<a href="http://tools.google.com/dlpage/gaoptout?hl=de">http://tools.google.com/dlpage/gaoptout?hl=de</a>) verfügbare Browser-Plugin herunterladen
            und installieren.
          </p>
          <p>
            Sie können die Erfassung durch Google Analytics verhindern, indem Sie auf folgenden Link
            klicken. Es wird ein Opt-Out-Cookie gesetzt, das die zukünftige Erfassung Ihrer Daten beim
            Besuch dieser Website verhindert: Google Analytics deaktivieren
            Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter
            <a href="http://www.google.com/analytics/terms/de.html"> http://www.google.com/analytics/terms/de.html</a> bzw. unter
            <a href="https://www.google.de/intl/de/policies/"> https://www.google.de/intl/de/policies/</a>. Wir weisen Sie darauf hin, dass auf dieser Website
            Google Analytics um den Code „anonymizeIp“ erweitert wurde, um eine anonymisierte
            Erfassung von IP-Adressen (sog. IP-Masking) zu gewährleisten.
          </p>
          <p>
            Sie können dies verhindern, indem Sie Ihren Browser so einrichten, dass keine Cookies
            gespeichert werden.
          </p>
          <p>
            Wir haben mit dem Anbieter einen entsprechenden Vertrag zur Auftragsdatenverarbeitung
            abgeschlossen.
          </p>
          <p>
            Ihre IP-Adresse wird erfasst, aber umgehend (z.B. durch Löschung der letzten 8 Bit)
            pseudonymisiert. Dadurch ist nur mehr eine grobe Lokalisierung möglich.
            Die Beziehung zum Webanalyseanbieter basiert auf <em>Standardvertragsklauseln/einem
            Angemessenheitsbeschluss der Europäischen Komission (z.B. im Fall der USA: „Privacy
            Shield“)</em>.
          </p>
          <p>
            Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des § 96 Abs 3 TKG
            sowie des Art 6 Abs 1 lit a (Einwilligung) und/oder f (berechtigtes Interesse) der DSGVO.
            Die Nutzerdaten werden für die Dauer von 6 Monaten aufbewahrt.
          </p>
          <p>
            OPT OUt Google Analytics:
          </p>
          <p>
            GA OptOut Link
          </p>
          <p>
            Um Sie zielgerichtet mit Informationen zu versorgen, erheben und verarbeiten wir außerdem
            freiwillig gemachte Angaben zu Interessengebieten, Geburtstag und Postleitzahl.
          </p>
          <p>
            <strong>Ihre Rechte</strong>
          </p>
          <p>
            Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die Rechte auf
            Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und
            Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
            Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise
            verletzt worden sind, können Sie sich bei uns (anitalangmaier@gmail.com) oder der
            Datenschutzbehörde beschweren.
          </p>
        </p>
        <br />
        <hr />
        <h1 style={{textAlign: "center"}}>Impressum</h1>
        <h3>Informationen gemäß §5 E-Commerce Gesetz und Offenlegung gemäß §25 Mediengesetz:</h3>
        <p>
          Anita Langmaier, BSc., Hebamme <br />
          Alfons Petzold Gasse 17/9/18<br></br>
          AT-2345 Brunn am Gebirge <br></br>
          E-Mail: anitalangmaier@gmail.com
          <br />
        </p>
        <h3>Inhalt:</h3>
        <p>Anita Langmaier</p>
        <h3>Bilder:</h3>
        <p><a href="https://www.franziskabittermann.at" style={{color: "#383e56"}}>Franziska Bittermann</a></p>
        <h3>Web-Design:</h3>
        <p>{firma}</p>
        <h3>Logo:</h3>
        <p>webolution Mödling in Zusammenarbeit mit Simona Surkova</p>

      </div>
      <Footer />
      <br />
    </div>
  );
}

export default Informationen;
