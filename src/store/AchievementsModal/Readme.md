*The controller to rule the achievements modal window.*


### API

**Push an achievement**
```javascript
window._achievementsController.pushAchievement(%achievement%)
```

@achievements — an array of achievements

**%achievement%** - an object, contains achievement
ex.

```json
{
  "description": "решено 2 задачи",
  "name": "solved2",
  "img": "/static/images/achievements/new_solved2.png"
}
```


**Open modal window**
```javascript
window._achievementsController.openModal()
```

**Close modal window**
```javascript
window._achievementsController.closeModal()
```