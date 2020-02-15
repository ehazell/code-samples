jQuery(document).ready(function ($) {
  /* google analytics */
  $("head").append(
    "<script>" +
    "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){" +
    "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o)," +
    "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)" +
    "})(window,document,'script','https://www.google-analytics.com/analytics.js','drought_analytics');" +
    "drought_analytics('create','UA-47155742-1','auto');" +
    "drought_analytics('set',{location:'https://www.drought.gov/external/snapshot/" + window.location.hostname + "'});" +
    "drought_analytics('send','pageview','/external/snapshot/" + window.location.hostname + "');" +
    "</script>"
  );

  /* handle on snapshot reset */
  $(".snapshot-reset").bind("click", function (event) {
    event.preventDefault();

    var $wrapper = $(this).closest(".snapshot-wrapper");
    $(this).hide();
    $wrapper.find(".snapshot-results").hide();
    $wrapper.find(".snapshot-entry").show();
    $wrapper.find(".snapshot-zip").val("");
    $wrapper.find(".snapshot-heading").text("");
  });

  /* handle on snapshot zip submit */
  $(".snapshot-wrapper").bind("submit", function (event) {
    event.preventDefault();

    var $wrapper = $(this),
      $results = $wrapper.find(".snapshot-results");

    /* get zip, stop if seems invalid */
    var zip = $wrapper.find(".snapshot-zip").val();
    if (zip.length !== 5 || isNaN(zip)) {
      $wrapper.find(".snapshot-heading").text("Incomplete zip code entered.");
      return false;
    }

    $wrapper.find(".snapshot-heading").text("Loading...");

    if (typeof drought_analytics === "function") {
      /* Google Analytics - Event Tracking */
      drought_analytics("send", "event", {eventCategory: 'zipsubmit', eventAction: 'interaction', eventLabel: zip});
    }

    var url = "https://www.drought.gov/drought/snapshot2/zip/" + zip;
    var meterMap = [
      "wet.png",
      "dry.png",
      "dry-mod.png",
      "mod.png",
      "mod-sev.png",
      "sev.png",
      "sev-ext.png",
      "ext.png",
      "ext-exc.png",
      "exc.png"
    ];
    var types = {
      temperature: "Maximum Temperature",
      precipitation: "Precipitation",
      drought_monitor: "Drought Monitor Intensity",
      palmer_drought_severity: "Palmer Drought Severity Index"
    };
    var related = {
      state: "Related State",
      region: "Related RCC Region",
      dews: "Related DEWS"
    };

    $.get(url, function (results) {
      if (results.hasOwnProperty("data") && !results.data.hasOwnProperty("error")) {

        $wrapper.find(".snapshot-entry").hide();
        $wrapper.find(".snapshot-reset").show();
        $results.show();

        /* creates this.location, this.temperature, this.precipitation, this.drought_monitor, this.palmer_drought_severity, this.state, and this.region */
        for (var thing in results.data) {
          if (results.data.hasOwnProperty(thing)) {
            this[thing] = results.data[thing] !== null ? results.data[thing] : "Unknown";
          }
        }

        var notes =
            "The Drought Monitor, Temperature and Precipitation values are based daily data at the center of the zip code and are as of " +
            this.temperature.date + ". The Palmer Drought Severity Index is based on monthly data for the "
            + '<a href="https://www.ncdc.noaa.gov/monitoring-references/maps/us-climate-divisions.php" target="_blank">U.S. Climate Division</a> ' +
            'where the zip code is located and is as of ' + this.palmer_drought_severity.date + "."
          ;

        $wrapper.find(".snapshot-heading").html("Current Conditions for " + this.location.city + ",&nbsp;" + this.location.state + "&nbsp;" + this.location.zip);
        $results.find(".snapshot-meter").html('<img src="https://www.drought.gov/drought/sites/drought.gov.drought/modules/custom/snapshot/images/' + meterMap[this.drought_monitor.image] + '" alt="' + this.drought_monitor.text + '">');
        $results.find(".snapshot-related").text("Also see:");
        notes = $results.find(".snapshot-notes").html(notes).text(); /* notes now is plain-text, which is needed for the list attribute */
        $results.find(".snapshot-tooltip").attr("title", notes);

        for (var type in types) {
          if (types.hasOwnProperty(type) && this[type]) {
            $results.find(".snapshot-" + type).html(
              (this[type].url ? '<a href="' + this[type].url + '" target="_blank">' + types[type] + "</a>" : types[type]) +
              ': <span class="snapshot-emphasis">' + this[type].index + (this[type].unit ? " " + this[type].unit : "") + "</span>"
            );
          }
        }

        for (var item in related) {
          if (related.hasOwnProperty(item) && this[item]) {
            $results.find(".snapshot-" + item).html('<a href="' + this[item].url + '" target="_blank">' + this[item].name + '</a>');
          }
        }
      }
      else if (!results.hasOwnProperty("data")) { /* response malformed */
        $wrapper.find(".snapshot-heading").text("Unexpected server error...");
      }
      else { /* response contained an error */
        $wrapper.find(".snapshot-heading").text(results.data.error);
      }
    });
  });
});
