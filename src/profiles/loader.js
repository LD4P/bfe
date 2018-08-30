// Loads Profiles into editor
const load = config => bfelog => {
  for (var i=0; i < config.profiles.length; i++) {
    file = config.profiles[i];
    bfelog.addMsg(new Error(), "INFO", "Loading profile: " + config.profiles[i]);
    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: file,
        success: function(data) {
            $("#bfeditor-loader").width($("#bfeditor-loader").width()+5+"%");
            profiles.push(data);
            for (var rt=0; rt < data.Profile.resourceTemplates.length; rt++) {
                resourceTemplates.push(data.Profile.resourceTemplates[rt]);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            bfelog.addMsg(new Error(), "ERROR", "FAILED to load profile: " + file);
            bfelog.addMsg(new Error(), "ERROR", "Request status: " + textStatus + "; Error msg: " + errorThrown);
        }
    });
  };
};

module.exports = {
  load
}
