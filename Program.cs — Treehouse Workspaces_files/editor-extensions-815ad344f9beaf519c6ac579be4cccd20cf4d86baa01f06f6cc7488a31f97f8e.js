(function() {
  require([ "https://static.teamtreehouse.com/assets/workspaces/extensions/snapshot_workspace/html/snapshot_action.html-bed76711a1f44ab73ecbbe924826629cd15b30daa645f5ba1f28bb94da1a12d2.js", "https://static.teamtreehouse.com/assets/workspaces/extensions/fork_workspace/html/fork_action.html-1e1a029b6d4d5fd93d4aca106a57a54d2ebd89fbc92ef0676380b2e04c3ffa25.js" ], function(e, t) {
    var a, s;
    return a = require("utils/AppInit"), require("workspace-editor/workspace/Workspace"), 
    s = function(e) {
      return $("ul.util-actions").prepend(e);
    }, a.htmlReady(function() {
      return s(t), s(e);
    });
  });
}).call(this), function() {
  require([ "https://static.teamtreehouse.com/assets/workspaces/extensions/snapshot_workspace/html/partials/snapshots.html-a8da9702cc42ae16381fadecd1262f6874d4ce8253772286a6c401ca9e4ad826.js", "https://static.teamtreehouse.com/assets/workspaces/extensions/snapshot_workspace/html/partials/snapshot.html-702dbc2939aaf3eae092397c17eb33e085cdc1c853861758d4212db9ad3f2e95.js" ], function(e, t) {
    var a, s, r, n, o, i, c, u, d, l, p, f, h, m, k, w, b, g, v, _, q, E, y, j, T;
    return a = require("utils/AppInit"), s = require("utils/ExtensionUtils"), n = require("workspace-editor/workspace/Workspace"), 
    r = 5, s.addLinkedStyleSheet("https://static.teamtreehouse.com/assets/workspaces/extensions/snapshot_workspace/snapshot_workspace-6c449684fa6f3ea8a1b0c5766c7e770156fc7d2fa9edf417b835afe03ab29ee0.css"), 
    q = null, m = null, T = null, _ = 0, k = {
      snapshots:e,
      snapshot:t
    }, v = function() {
      return q = $("#snapshot-tab"), m = $(".snapshot-manager"), q.on("click", y), m.on("click", w), 
      $("body").on("click", p), $("#create-snapshot").on("click", o);
    }, b = function() {
      return m.find(".snapshot-item-delete").on("click", u), m.find(".snapshot-delete-cancel").on("click", l), 
      m.find(".snapshot-delete-confirm").on("click", i);
    }, w = function(e) {
      return e.stopPropagation();
    }, y = function() {
      return m.closest(".util-dropdown").toggleClass("open"), !1;
    }, p = function() {
      return m.closest(".util-dropdown").removeClass("open");
    }, o = function() {
      var e;
      return e = "/workspaces/" + T + "/snapshots", c(), $.ajax({
        url:e,
        type:"POST",
        dataType:"json",
        contentType:"application/json",
        processData:!1,
        success:h,
        error:function() {
          return alert("There was a problem creating a snapshot for this workspace.");
        }
      });
    }, h = function() {
      var e;
      return e = "/workspaces/" + T + "/snapshots", $.ajax({
        url:e,
        type:"GET",
        dataType:"json",
        contentType:"application/json",
        processData:!1,
        success:function(e) {
          return g(e);
        }
      });
    }, i = function(e) {
      var t, a;
      return t = $(e.target).data("snapshot-id"), a = "/workspaces/" + T + "/snapshots/" + t, 
      d(f(e.target)), $.ajax({
        url:a,
        type:"DELETE",
        dataType:"json",
        contentType:"application/json",
        processData:!1,
        success:h
      });
    }, u = function(e) {
      var t;
      return l(), t = $(e.target).parents(".snapshot-item"), t.find(".snapshot-delete").show(), 
      null != e ? e.preventDefault() :void 0;
    }, l = function(e) {
      return $(".snapshot-delete").hide(), null != e ? e.preventDefault() :void 0;
    }, c = function() {
      return $(".snapshot-create").show();
    }, d = function(e) {
      return e.find(".snapshot-delete-active").show();
    }, f = function(e) {
      return $(e).closest(".snapshot-item");
    }, g = function(t) {
      var a, s;
      return s = {
        snapshots:t
      }, _ = t.length, j(), E(), a = Mustache.render(e, s, k), m.find(".snapshot-list").replaceWith(a), 
      b();
    }, j = function() {
      return m.find(".snapshot-count").html(_ + " of " + r + " Snapshots taken");
    }, E = function() {
      var e;
      return e = m.find("#create-snapshot"), _ >= r ? e.attr("disabled", "disabled") :e.removeAttr("disabled");
    }, a.appReady(function() {
      return T = n.getMetadata().hostedId, v(), g([]), h();
    });
  });
}.call(this), function() {
  require([ "https://static.teamtreehouse.com/assets/workspaces/extensions/fork_workspace/html/fork_dialog.html-09cc0195aa14ce03ed140542b01ed6e41ce4cb6af7eeca53cafa341861b0f5ba.js" ], function(e) {
    var t, a, s, r, n, o;
    return t = require("utils/AppInit"), a = require("widgets/Dialogs"), s = require("utils/ExtensionUtils"), 
    r = require("workspace-editor/workspace/Workspace"), s.addLinkedStyleSheet("https://static.teamtreehouse.com/assets/workspaces/extensions/fork_workspace/fork_workspace-05ccfb3ff90f7dbb1b880523c4bd513995b8cfdc5d1911ada075a450ec6b710c.css"), 
    o = function(t) {
      var s, o, i, c;
      return i = Mustache.render(e, r.getMetadata()), s = a.showModalDialogUsingTemplate(i), 
      o = s.getElement(), c = o.find("#workspace-title-input"), s.done(function(e) {
        var t, s;
        if (e === a.DIALOG_BTN_OK) return t = null != (s = r.getMetadata().hostedId) ? s :r.getMetadata().id, 
        n(c.val(), t);
      }), null != t ? t.preventDefault() :void 0;
    }, n = function(e, t) {
      var a;
      return a = {
        workspace:{
          title:e,
          forked_workspace_id:t
        }
      }, $.ajax({
        url:"/workspaces",
        type:"POST",
        dataType:"json",
        contentType:"application/json",
        processData:!1,
        data:JSON.stringify(a),
        success:function(e) {
          return window.location = "/workspaces/" + e.workspace.id;
        },
        error:function() {
          return alert("There was a problem forking this workspace.");
        }
      });
    }, t.htmlReady(function() {
      var e;
      return $("#fork-tab").on("click", o), e = $("meta[name='csrf-token']").attr("content"), 
      $.ajaxSetup({
        beforeSend:function(t) {
          return t.setRequestHeader("X-CSRF-Token", e);
        }
      });
    });
  });
}.call(this), function() {
  var e, t;
  e = require("editor/EditorManager"), t = require("utils/ExtensionUtils"), t.addLinkedStyleSheet("https://static.teamtreehouse.com/assets/workspaces/extensions/csharp_highlighting/csharp_highlighting-687010553045ae1dca3ee6e02b9d1166e668e55f8518c1c1a2784d4c0debcf43.css"), 
  $(e).on("activeEditorChange", function(e, t) {
    var a;
    if ("csharp" === (null != t ? t.document.language.getId() :void 0)) return a = $(t.getRootElement()), 
    a.addClass("cm-s-visualstudio").removeClass("cm-s-light");
  });
}.call(this), function() {
  require([ "https://static.teamtreehouse.com/assets/workspaces/extensions/read_only_mode/html/read_only_dialog.html-16710177d384d7ee321c2b92d1eaf86990a3207a85604521ddad5744bbd21e7b.js" ], function(e) {
    var t, a, s, r, n, o, i;
    return s = require("widgets/Dialogs"), t = require("command/CommandManager"), a = require("command/Commands"), 
    n = require("file/NativeFileError"), r = require("workspace-editor/project/ErrorHandler"), 
    o = require("workspace-editor/workspace/Workspace"), i = function() {
      var r, n, i, c;
      return i = Mustache.render(e, o.getMetadata()), r = s.showModalDialogUsingTemplate(i), 
      n = r.getElement(), c = n.find("#workspace-title-input"), r.done(function(e) {
        if (e === s.DIALOG_BTN_OK) return t.execute(a.FORK_WORKSPACE, c.val(), o.getMetadata().id);
      });
    }, r.registerHandlerForError(n.NO_MODIFICATION_ALLOWED_ERR, i);
  });
}.call(this), function() {
  require([ "https://static.teamtreehouse.com/assets/workspaces/extensions/total_size_limit/html/size_limit_reached_dialog.html-44fe8b151891729c64ede0628c0ccda6b3b097a4a6c791e2db16ee6c8af0d2e3.js" ], function(e) {
    var t, a, s, r, n, o, i, c, u;
    return t = require("utils/AppInit"), a = require("widgets/Dialogs"), require("command/CommandManager"), 
    require("command/Commands"), r = require("file/NativeFileError"), s = require("workspace-editor/project/ErrorHandler"), 
    i = require("workspace-editor/utils/filesize.min"), n = 52428800, o = {
      base:2,
      round:1
    }, u = function() {
      var t;
      return t = Mustache.render(e, {
        sizeLimit:c(n),
        currentSize:c(brackets.fs.driver.currentFSSize)
      }), a.showModalDialogUsingTemplate(t);
    }, s.registerHandlerForError(r.QUOTA_EXCEEDED_ERR, u), c = function(e) {
      return i(e, o);
    }, t.htmlReady(function() {
      return brackets.fs.driver.setMaxFSSize(n);
    });
  });
}.call(this);
//# sourceMappingURL=/assets/maps/workspaces/editor-extensions-dd2d13b18f635a8cddd5f1b730ed260c167e382810c2b729fede9868a30e6c13.js.map
