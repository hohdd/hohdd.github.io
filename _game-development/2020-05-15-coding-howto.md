---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "[Unity Coding] How-To"
description: "[Unity Coding] How-To"

### HUMAN
header: "How-To"
# coverImg: /assets/img/articles/demo/girl_hat.jpg # size: 1068x703 | 900x500 | 600x400
# effect: true # use img-sepia?
# thumbnailImg: /assets/img/articles/demo/940-900x500-grayscale.jpg # size: 900x500 | 600x400
text2speech: false # có bật chức năng Text-To-Speech hay không?

### categories: mỗi category cách nhau bởi dấu cách!
# categories: Jekyll
### Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
mermaid: false
highlight: true # để thêm màu mè cho <pre> CODE </pre>
amp: false
audioSetting: false # có menu để setting audio or not
collection: Coding # this for AMP related post
### category: dùng để group collection
category: Coding

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---
## Editor

## Runtime

## Patterns

### Tạo MonoBehaviour Singleton
- Mục đích: để truy cập bất cứ lúc nào, ở bất cứ đâu
- Đối tượng áp dụng: những MonoBehaviour thiết yếu được sử dụng nhiều nơi (VD: GameManager, LevelManager, HUDManager, TimeManager, ObjectiveManager... )
- Thực hiện:
```csharp
    ...
    public static LevelManager Instance { get; private set; }
    private void Awake()
    {
        Instance = this; // singleton
    }
    ...
```

### Sử dụng ScriptableObject
- Mục đích: có thể sử dụng cho nhiều mục đích khác nhau.
- Ví dụ về **Event-Listener**
```csharp
    /// -------------------- GameEvent -------------------------
    /// <summary>
    /// Usage: là một 'ScriptableObject' để pool sẵn một list các Listener...
    /// - Tạo các Event khác nhau trong Assets (VD: ToggleIngameMenuEvt, PlayerDyingEvt...)
    /// - Tại nơi muốn Raise event này sẽ kéo reference vào biến rồi gọi hàm Raise() trên biến đó
    /// </summary>
    [CreateAssetMenu(menuName = "DongHD/Events/Game Event")]
    public class GameEvent : ScriptableObject
    {
        [NonSerialized] private readonly List<GameEventListener> listeners = new List<GameEventListener>();

        public void Raise(object obj = null)
        {
            for (int i = 0; i < listeners.Count; i++)
            {
                listeners[i].OnEventRaised(obj);
            }
        }

        public void RegisterListener(GameEventListener listener)
        {
            listeners.Add(listener);
        }

        public void UnregisterListener(GameEventListener listener)
        {
            listeners.Remove(listener);
        }
    }

    /// -------------------- GameEventListener -------------------------
    /// <summary>
    /// Usage: là một 'MonoBehaviour' để đăng ký Listener vào Event và cho phép Script khác (cùng GameObject) triển khai 'UnityAction'...
    /// - Tại GameObject muốn xử lý một tác vụ khi có một sự kiện nào đó xảy ra sẽ được add Component này.
    /// - Tại Script trong cùng GameObject sẽ triển khai gameResponse (UnityEvent) của Component này.
    /// </summary>
    [AddComponentMenu("DongHD/Events/Game Event Listener")]
    public class GameEventListener : MonoBehaviour
    {
        public GameEvent eventAsset;
        public UnityAction<object> gameAction;

        private void OnEnable()
        {
            eventAsset.RegisterListener(this);
        }
        private void OnDisable()
        {
            eventAsset.UnregisterListener(this);
        }
        
        public void OnEventRaised(object obj = null)
        {
            gameAction?.Invoke(obj);
        }
    }

    /// -------------------- Usage -------------------------
    public class MessageHUDController : MonoBehaviour
    {
        ...
        [Tooltip("Listener Event để tạo MessageHUD")] public GameEventListener evtCreateMessageHUD;

        void Start()
        {
            // triển khai UnityAction trong Listener (gọi hàm 'CreateMessage')
            evtCreateMessageHUD.gameAction += (object txt) => { CreateMessage(txt as string); };
        }

        public void CreateMessage(string text)
        {
            // doing something when event raised
        }
    }
```

### Custom Inspector
- Mục đích: hỗ trợ cấu hình giá trị trong Inspector của một GameObject đã add Script Component có đoạn code này
- Thực hiện:
```csharp
#if UNITY_EDITOR
using UnityEditor;
#endif
...
#if UNITY_EDITOR
    // UITable là Script Component, hãy để đoạn code này cùng file 'UITable.cs'
    [CustomEditor(typeof(UITable), true)]
    public class UITableEditor : Editor
    {
        public override void OnInspectorGUI()
        {
            UITable myTarget = (UITable)target;
            DrawDefaultInspector(); // <--- DONT FORGET THIS!!!

            if (GUILayout.Button("Update")) // <--- thêm một button 'Update' và thực hiện 'UpdateTable' trong 'UITable'
            {
                myTarget.UpdateTable(null);
            }
        }

    }
#endif
```

### Draw Gizmos với GimozDrawUtility
- Mục đích: visualize một hướng di chuyển, không gian...
- Thực hiện: bên trong Script MonoBehaviour triển khai 'OnDrawGizmos'.

```csharp
public class BasicTween : MonoBehaviour
{
    ...
    void Start() { ... }
    ...
    void Update() { ... }
    ...
    #if UNITY_EDITOR
        public void OnDrawGizmos()
        {
            if (GimozDrawUtility.GimozEnabled() && _from != null && _to != null)
            {
                GimozDrawUtility.DrawLine(_from, _to, Color.red); // GimozDrawUtility: DrawPoint, DrawLine, DrawRay, DrawRectangle, DrawGizmoCube, DrawBounds...
            }
        }
    #endif
}

// -------------------- Ví dụ Draw a Bound --------------------
#if UNITY_EDITOR
    public void OnDrawGizmos()
    {
        if (GimozDrawUtility.GimozEnabled())
        {
            DrawBounds(); // <--- draw bounds
            DrawDebug(); // <--- debug khi play mode (Application.IsPlaying(gameObject))
        }
    }
    private void DrawBounds()
    {
        // init bounds for Editor
        bounds.center = transform.position;
        bounds.extents = extends;
        // draw bounds
        GimozDrawUtility.DrawBounds(bounds, Color.red, gameObject.name);
    }
    private void DrawDebug()
    {
        if (Application.IsPlaying(gameObject))
        {
            switch (m_Enum)
            {
                case DebugEnum.RED:
                    GimozDrawUtility.DrawPoint(PlayerController.Instance.transform.position, 1, Color.red);
                    break;
                case DebugEnum.YELLOW:
                    GimozDrawUtility.DrawPoint(PlayerController.Instance.transform.position, 1, Color.yellow);
                    break;
                case DebugEnum.GREEN:
                   GimozDrawUtility.DrawPoint(PlayerController.Instance.transform.position, 1, Color.green);
                   break;
            }
        }
    }    
#endif
```

### Global Configuration Manager
- Cấu hình Global nên Script sẽ là MonoBehaviour và DontDestroyOnLoad(this.gameObject) ở 'Awake()'
- Script Component phải là một Singleton để truy cập được ở những chỗ khác
- Sử dụng 'GameConfigs : ScriptableObject' thay vì 'PlayerPref' để lưu cấu hình mà người dùng đã set
- Ví dụ: GlobalConfigurableManager.cs, GameConfigs.cs

### Xử lý Start và Load Scene ở các Levels
- Mục đích: thực hiện LoadSceneAsync với thanh tiến độ
- Script Component phải là một Singleton để truy cập được ở những chỗ khác (các Levels, Scene khi cần chuyển màn hình)
- Ví dụ: StartAndLoadSceneController.cs, [Prefab] StartAndLoadSceneController

### Tự implement một Touch Control Mobile (Joysticks)
- Nguyên lý hoạt động:
    + là phối hợp giữa 'TouchControls' và 'TouchClickTracker'
    + 'TouchClickTracker' cung cấp dữ liệu cho 'TouchControls'
    + 'TouchControls' cung cấp dữ liệu cho 'GameInput'
- Ví dụ: TouchClickTracker.cs, TouchControls.cs, GameInput.cs

### TODO...
- HUD
- In-Game Menu
- Managers: Time, Audio, Objective, Game...
- BulletHell, Shooter

## Linh tinh
- Package Manager Download Directory:
    + Windows: ```C:\Users\[your-user]\AppData\Local\Unity\cache\packages\packages.unity.com```
    + Mac: ```~/Library/Unity/cache hoặc <project_path>/Library/PackageCache```