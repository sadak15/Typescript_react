import './App.css'
import useNumberStorage from './hooks/useNumberStorage'
import useSettingsStorage, { type Settings } from './hooks/useSettingsStorage'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  // 1
  const [score, setScore] = useNumberStorage('score', 0)

  // 2
  const [settings, setSettings] = useSettingsStorage('settings', {
    language: 'en',
    notifications: true,
  })

  // 3
  const [genericSettings, setGenericSettings] = useLocalStorage<Settings>('generic-settings', {
    language: 'so',
    notifications: false,
  })

  return (
    <>
      {/* 1 */}
      <div>
        <h2>Score: {score}</h2>
        <button onClick={() => setScore(score + 1)}>+1</button>
      </div>

      {/* 2 */}
      <div>
        <h2>Settings</h2>
        <p>Language: {settings.language}</p>
        <p>Notifications: {settings.notifications ? 'On' : 'Off'}</p>
        <button onClick={() => setSettings({ ...settings, language: settings.language === 'en' ? 'so' : 'en' })}>
          Toggle language
        </button>
        <button onClick={() => setSettings({ ...settings, notifications: !settings.notifications })}>
          Toggle notifications
        </button>
      </div>

      {/* 3 */}
      <div>
        <h2>Generic Settings</h2>
        <p>Language: {genericSettings.language}</p>
        <p>Notifications: {genericSettings.notifications ? 'On' : 'Off'}</p>
        <button onClick={() => setGenericSettings({ ...genericSettings, notifications: !genericSettings.notifications })}>
          Toggle notifications
        </button>
      </div>
    </>
  )
}

export default App
