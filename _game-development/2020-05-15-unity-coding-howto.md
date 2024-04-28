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
- Nhược điểm: bị cố định vùng có thể touch
- Ví dụ: TouchClickTracker.cs, TouchControls.cs, GameInput.cs

### TODO...
- HUD
- In-Game Menu
- Managers: Time, Audio, Objective, Game...
- BulletHell, Shooter

## Investigate

### BattleCity

#### Read Json
```csharp
// Đọc file Text Json nằm trong thư mục 'Resources' (Resources/Maps/JsonText_*)
TiledData ReadJson(int _mapLevel)
{
    // UnityEngine.TextAsset là nội dung tệp văn bản. (text, bytes, GetPreview(int maxChars), DecodeString(byte[] bytes)...)
    TextAsset jsonData = Resources.Load<TextAsset>(string.Format("Maps/JsonText_{0}",_mapLevel));
    // UnityEngine.JsonUtility chứa các hàm tiện ích để làm việc với dữ liệu JSON. (FromJson, FromJson<T>, ToJson...)
    return JsonUtility.FromJson<TiledData>(jsonData.text);
}
...
// TiledData, Layers, Properties giống như các object ORM...
[Serializable]
public class TiledData
{
    public List<Layers> layers;
}
[Serializable]
public class Layers
{
    public string name;
    public int[] data;
    public List<Properties> properties;
}
[Serializable]
public class Properties
{
    public int value;
    public string name;
}
```

#### Khởi tạo Map và Enemies
```csharp
// Load Map '_mapLevel' từ file Json
// 1. destroy các items có tag là 'Respawn' và clear các List
// 2. Đọc dữ liệu Map từ Json file
// 3. KHỞI TẠO Ground (Grass)
// 4. [init] dữ liệu Map (mapData) và ListEnemy (listProperties) dựa vào dữ liệu file Json (tiledData)
// 5. KHỞI TẠO các đối tượng (Brick, Rock, Tree, Water) trong Map
// 6. [init] dữ liệu List Enemy dựa trên giữ liệu thiết kế từ file Json (độ khó map: loại Enemy, số lượng mỗi loại), lúc này vẫn chưa khởi tạo
public void LoadMaps(int _mapLevel)
{
    // 1. destroy các items có tag là 'Respawn' và clear các List
    ClearMap();

    // 2. Đọc dữ liệu Map từ Json file
    TiledData tiledData = ReadJson(_mapLevel);
    int indexRow = 0;
    int indexCol = 52;
    int[] mapData = new int[]{};
    List<Properties> listProperties = new List<Properties>();
    
    // 3. khởi tạo Ground (Grass) 
    for (int r = 0; r < 13; r++)
    {
        for (int c = 0; c < 13; c++)
        {
            float x = c * 4 + 2.5f;
            float z = r * -4 - 2.5f;
            Transform grass = Instantiate<Transform>(Resources.Load<Transform>($"Prefabs/Map_Grass_0{UnityEngine.Random.Range(1,4)}"));
            grass.position = new Vector3(x,0,z);
        }
    }

    // 4. init Map (mapData) và ListEnemy (listProperties) dựa vào dữ liệu file Json (tiledData)
    foreach (var item in tiledData.layers)
    {
        switch (item.name)
        {
            case "Map":
                mapData = item.data;
                break;
            case "ListEnemy":
                listProperties = item.properties;
                break;
            default:
                break;
        }
    }
    
    // 5. khởi tạo các đối tượng (Brick, Rock, Tree, Water) trong Map
    foreach (var cubeInTiled in mapData)
    {
        // reset indexCol về 1 và giảm indexRow nếu indexCol > 52 (giá trị ban đầu là 52)
        indexCol++;
        if (indexCol > 52)
        {
            indexCol = 1;
            indexRow--;
        }

        // nếu mapData.item > 0 (cubeInTiled > 0): là vị trí các 'cube' (Brick, Rock, Tree, Water)
        if (cubeInTiled > 0)
        {
            // Thêm đối tượng (Brick, Rock, Tree, Water) vào Dictionary
            // cubesOBJ là một Dictionary chứa các đối tượng (Brick, Rock, Tree, Water) có trong Map
            if (!cubesOBJ.ContainsKey(cubeInTiled)) {
                cubesOBJ.Add(cubeInTiled, Resources.Load<CubeEntity>(String.Format("Prefabs/{0}", ((CUBE_TYPE)cubeInTiled).ToString())));
            }

            // khởi tạo (Instantiate) đối tượng (Brick, Rock, Tree, Water)
            CubeEntity cube = Instantiate<CubeEntity>(cubesOBJ[cubeInTiled]);
            cube.transform.SetParent(transform); // group lại cho cùng Parent
            Vector3 pos = new Vector3(indexCol, 0, indexRow); // init pos dựa vào indexCol và indexRow
            cube.transform.position = pos; // init position
            cube.transform.DOLocalMoveY(0,0.2f).From(-3).SetDelay((-indexRow) *0.1f); // sử dụng Tween để animate
            // quản lý Tree list
            if (cube.cubeType == CUBE_TYPE.Tree)
            {
                listTree.Add(pos, cube);
            }
            else
            {
                listCube.Add(pos, cube);
            }
        }
        
    }
    //Debug.Log(string.Format("{0} : x = {1}, y = {2}", tiledData.layers[1].objects[0].name, tiledData.layers[1].objects[0].x, tiledData.layers[1].objects[0].y));

    // 6. init List Enemy dựa trên giữ liệu thiết kế từ file Json (độ khó map: loại Enemy, số lượng mỗi loại)
    foreach (var properties in listProperties)
    {
        for (int i = 0; i < properties.value; i++)
        {
            listEnemys.Add(properties.name);
        }
    }
}

// KHỞI TẠO Enemies: Lấy Random một Enemy trong danh sách (string) và khởi tạo nó ở vị trí _spawPos
public bool CreateEnemy(Vector3 _spawPos)
{
    if(listEnemys.Count>0)
    {
        int indexOfEnemy = UnityEngine.Random.Range(0, listEnemys.Count);
        Instantiate<EnemyEntity>(
            Resources.Load<EnemyEntity>(
                string.Format("Prefabs/{0}", listEnemys[indexOfEnemy])), _spawPos, Quaternion.identity);
        listEnemys.RemoveAt(indexOfEnemy);
        return true;
    } else
    {
        return false;
    }
}
```

#### Sử dụng Setter để implement luồng game
- Start(): status = GAME_STATUS.LoadMap > Setter
- Setter: case GAME_STATUS.LoadMap > xong sẽ set status = GAME_STATUS.Init
- Setter: case GAME_STATUS.Init > khởi tạo các chỉ số (player) và CreateEnemy...

#### Joystick
```csharp
// Update() > if(status == GAME_STATUS.Play) > Joystick();
void Joystick()
{
    // Nếu đang Click chuột hoặc Touch (thời điểm Click)
    if (Input.GetMouseButtonDown(0))
    {
        // kiểm tra xem có Touch vào HUD hoặc Button (AttackButton) hay không?
        // UnityEngine.RectTransformUtility: Lớp tiện ích chứa các phương thức trợ giúp để làm việc với RectTransform.
        isTouchOnUI = RectTransformUtility.RectangleContainsScreenPoint(AttackButton, Input.mousePosition, null)
            || RectTransformUtility.RectangleContainsScreenPoint(BackgroundUI, Input.mousePosition, null);
        if (isTouchOnUI)
        {
            // nếu isTouchOnUI = true thì dừng xử lý (không thuộc về Joystick)
            return;
        }
        startTouchPos = Input.mousePosition; // init dữ liệu vị trí Touch
        poinJoy.position = poinCenter.position = startTouchPos; // thay đổi vị trí Joystick Prefab và Joystick Image về vị trí Touch
        poinCenter.gameObject.SetActive(true); // active Joystick Prefab
        poinJoy.gameObject.SetActive(true); // active Joystick Image
    }
    // Nếu user nhả chuột hoặc bỏ Touch ở các vị tri thuộc về Joystick (thời điểm Thả)
    else if (Input.GetMouseButtonUp(0) && !isTouchOnUI)
    {
        // reset vị trí Joystick Prefab và Joystick Image
        poinJoy.localPosition = Vector2.zero;
        poinCenter.localPosition = new Vector2(-300,-440);
        // deactive các arrow
        SetArrowVisible(Vector2.zero);
    }
    // Nếu người dùng giữ chuột hoặc keep Touch ở các vị tri thuộc về Joystick (Hold)
    else if (Input.GetMouseButton(0) && !isTouchOnUI)
    {
        // Ghi nhận vị trí, phạm vi và khoảng cách
        Vector2 endTouch = Input.mousePosition;
        float range = Screen.width / 1080f * 80f; // hardcode...
        float distance = Vector2.Distance(endTouch, startTouchPos);

        // Validate endTouch
        if (distance > range)
        {
            //startTouchPos = LerpByDistance(startTouchPos, endTouch, range);
            endTouch = startTouchPos + (endTouch - startTouchPos).normalized*range;
        }
        // thay đổi vị trí Joystick Prefab và Joystick Image
        poinCenter.position = startTouchPos;
        poinJoy.position = endTouch;

        // Xác định hướng Drag và vector 'directionTouch'
        Vector2 directionTouch = (endTouch - startTouchPos).normalized * 10f;
        if(Mathf.Abs(directionTouch.x) >= Mathf.Abs(directionTouch.y))
        {
            directionTouch.y = 0;
        } else
        {
            directionTouch.x = 0;
        }

        // Kiểm tra khoảng cách Joystick di chuyển so với khoảng cách tối thiểu (40f)
        if (distance > 40f) // hardcode...
        {
            SetArrowVisible(directionTouch); // Hiển thị Arrow Indicator
            player.Move(directionTouch); // Move Player
        } else
        {
            SetArrowVisible(Vector2.zero); // Ẩn các arrow
        }
        //Vector3 pos = new Vector3(arrow.x, 0, arrow.y);
        //transform.position = Vector3.Lerp(transform.position, transform.position + pos, speed);
    }
}
```

#### BattleCity Take Note
- Attack Button: **Onclick()** > *Ref:GameManager* > public void **Shot()**
- Player Structure: gồm RootModel + **Canvas** (Mode: World Space) để hiển thị '**HealthBar**'
- Player Move: di chuyển theo vị trí ô. **Speed** được xử lý với **Vector3.Lerp()**. Khi move cần kết hợp với "**CheckMoveWithMap**" nếu vị trí mới là các đối tượng *(Brick, Rock, Tree, Water)*
- **GameManager** sẽ *call bullet.OnUpdate() và enemy.OnUpdate() ở Update()* để kích hoạt xử lý tiếp theo của **bullet** và **enemies**
- OOP:
    + TankEntity: TankData, BulletData, Move(), Shot(), Hit(), LevelUp()...
        - PlayerEntity (TankEntity): override[OnStart(), Hit(float damage), LevelUp(int level = 0)]
        - EnemyEntity (TankEntity): override[OnStart(), OnUpdate(), Hit(float damage)]
    + Other Entities: BulletEntity, CubeEntity, LevelEntity
    + ScriptableObject: TankLevelData
- Plugins:
    + Demigiant
        - DOTween

## Linh tinh
- Package Manager Download Directory:
    + Windows: ```C:\Users\[your-user]\AppData\Local\Unity\cache\packages\packages.unity.com```
    + Mac: ```~/Library/Unity/cache hoặc <project_path>/Library/PackageCache```