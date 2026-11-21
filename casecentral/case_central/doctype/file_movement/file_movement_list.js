frappe.listview_settings["File Movement"] = {
    has_indicator_for_draft: true,
    add_fields: ["status", "has_incoming"],
    get_indicator: function (doc) {
        if (doc.status === "Taken Away") {
            return [__("Taken Away"), "orange", "status,=,Taken Away"];
        } else if (doc.status === "Incoming Created" || doc.status === "Taken Away / Incoming Created") {
            return [__("Taken Away / Incoming Created"), "blue", "status,=,Incoming Created"];
        } else if (doc.status === "Missing Files") {
            return [__("Missing Files"), "red", "status,=,Missing Files"];
        } else if (doc.status === "Received") {
            return [__("Received"), "green", "status,=,Received"];
        } else if (doc.status === "Incoming Cancelled") {
            return [__("Taken Away"), "orange", "status,=,Taken Away"];
        } else if (doc.status === "Cancelled" || doc.docstatus === 2) {
            return [__("Cancelled"), "red", "status,=,Cancelled"];
        } else if (doc.status === "Draft" || doc.docstatus === 0) {
            return [__("Draft"), "red", "status,=,Draft"];
        }
    }
};
