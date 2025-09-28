# GeneralSans Font Setup Guide

## Current Status ✅
- ✅ Fonts are in `src/assets/fonts/`
- ✅ Android configuration complete
- ✅ iOS Info.plist updated
- ✅ Fonts copied to iOS directory
- ❌ **iOS Xcode project needs font files added**

## Steps Completed
1. Fonts are properly placed in `src/assets/fonts/`
2. `react-native.config.js` is configured correctly
3. Android fonts are working (in `android/app/src/main/assets/fonts/`)
4. iOS `Info.plist` has UIAppFonts array configured
5. Font files copied to `ios/TruthAndFriends/`

## Missing Step for iOS (Requires Mac/Xcode)

**The fonts need to be added to the Xcode project:**

### Option 1: Using Xcode (Recommended)
1. Open `ios/TruthAndFriends.xcworkspace` in Xcode
2. Right-click on the `TruthAndFriends` project in the navigator
3. Select "Add Files to TruthAndFriends..."
4. Navigate to the font files:
   - `GeneralSans-Bold.otf`
   - `GeneralSans-Italic.otf`
   - `GeneralSans-Medium.otf`
   - `GeneralSans-Regular.otf`
   - `GeneralSans-Semibold.otf`
5. Make sure "Add to target" is checked for TruthAndFriends
6. Click "Add"
7. Clean build folder: `Product → Clean Build Folder`
8. Build: `Product → Build`

### Option 2: Manual project.pbxproj Edit (Advanced)
If you can't use Xcode, you need to manually edit the `ios/TruthAndFriends.xcodeproj/project.pbxproj` file to add the font references.

## Testing Font Loading

Use the `FontTest` component to verify fonts are working:

```javascript
import FontTest from './src/components/molecules/FontTest';

// Add to your screen/component:
<FontTest />
```

## For Windows Development

Since you're on Windows:

1. **Android will work immediately** - fonts are already configured
2. **iOS requires a Mac** with Xcode to add fonts to the project
3. **Use Expo/EAS Build** for iOS if you don't have a Mac
4. **Test on Android first** to verify the fonts work

## Font Usage in Components

```javascript
// Correct font family names:
fontFamily: 'GeneralSans-Regular'
fontFamily: 'GeneralSans-Medium'
fontFamily: 'GeneralSans-Semibold'
fontFamily: 'GeneralSans-Bold'
fontFamily: 'GeneralSans-Italic'
```

## Alternative Solutions for Windows Users

### 1. Use Expo (Recommended for Windows)
```bash
npx create-expo-app --template
# Then use EAS Build for iOS
```

### 2. Use React Native Web fonts
For web/desktop testing, add to your `public/index.html`:
```html
<style>
  @font-face {
    font-family: 'GeneralSans-Regular';
    src: url('./assets/fonts/GeneralSans-Regular.otf');
  }
  /* Add other variants */
</style>
```

### 3. Cloud Build Services
- **EAS Build** (Expo)
- **Bitrise**
- **CircleCI**
- **GitHub Actions** with macOS runners

## Verification Commands

```bash
# Check if fonts are in the right places:
ls src/assets/fonts/
ls android/app/src/main/assets/fonts/
ls ios/TruthAndFriends/*.otf

# Test Android build:
npx react-native run-android

# For iOS (requires Mac):
npx react-native run-ios
```

## Current File Locations ✅

```
src/assets/fonts/
├── GeneralSans-Bold.otf
├── GeneralSans-Italic.otf
├── GeneralSans-Medium.otf
├── GeneralSans-Regular.otf
└── GeneralSans-Semibold.otf

android/app/src/main/assets/fonts/
├── GeneralSans-Bold.otf
├── GeneralSans-Italic.otf
├── GeneralSans-Medium.otf
├── GeneralSans-Regular.otf
└── GeneralSans-Semibold.otf

ios/TruthAndFriends/
├── GeneralSans-Bold.otf
├── GeneralSans-Italic.otf
├── GeneralSans-Medium.otf
├── GeneralSans-Regular.otf
└── GeneralSans-Semibold.otf
```

## Next Steps

1. **Test on Android first** - should work immediately
2. **For iOS**: Get access to a Mac with Xcode, or use cloud build services
3. **Use FontTest component** to verify font loading
4. **Check Metro bundler logs** for any font-related errors

The fonts are properly configured for Android and should work immediately. iOS requires the additional Xcode step to add the font files to the project bundle.