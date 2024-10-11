import * as THREE from 'three'

export enum States {
  Idle = 'Idle',
  Walk = 'Walking',
  Run = 'Running',
  Dance = 'Dance',
  Death = 'Death',
  Sit = 'Sitting',
  Stand = 'Standing'
}

export enum Emotes {
  Jump = 'Jump',
  Yes = 'Yes',
  No = 'No',
  Wave = 'Wave',
  Punch = 'Punch',
  ThumbsUp = 'ThumbsUp'
}

let actions: Record<string, THREE.AnimationAction>
let activeAction: THREE.AnimationAction
let previousAction: THREE.AnimationAction

export default class MegaBotActions {
  model: THREE.Group<THREE.Object3DEventMap>
  modelAnimations: THREE.AnimationClip[]

  static DEFAULT_ANIMATION = States.Run
  static DURATION_STATE = 0.5
  static DURATION_EMOTE = 0.2

  constructor(model: THREE.Group<THREE.Object3DEventMap>, modelAnimations: THREE.AnimationClip[]) {
    this.model = model
    this.modelAnimations = modelAnimations
  }

  public startAnimation(mixer: THREE.AnimationMixer) {
    const animationRun = this.modelAnimations.find(
      (animation: { name: string }) => animation.name === MegaBotActions.DEFAULT_ANIMATION
    )

    if (animationRun) {
      actions = {}

      for (const animation of this.modelAnimations) {
        const action = mixer.clipAction(animation)
        actions[animation.name] = action
      }

      activeAction = actions[MegaBotActions.DEFAULT_ANIMATION]
      this.checkActionHasLoop(activeAction, MegaBotActions.DEFAULT_ANIMATION)

      activeAction.play()
      this.configureExpressions()
    }
  }

  public runState(state: string) {
    const actionExists = Object.values(States).find((value) => value === state)

    if (!actionExists) {
      throw new Error(`Não existe a action "${state}" nos estados do modelo.`)
    }

    this.loadNewMovement(state, MegaBotActions.DURATION_STATE)
  }

  public runEmote(emote: string) {
    const actionExists = Object.values(Emotes).find((value) => value === emote)

    if (!actionExists) {
      throw new Error(`Não existe a action "${emote}" nos emotes do modelo.`)
    }

    this.loadNewMovement(emote, MegaBotActions.DURATION_EMOTE)
  }

  private checkActionHasLoop(action: THREE.AnimationAction, animation: string) {
    if (animation === States.Death || animation in Emotes) {
      action.clampWhenFinished = true
      action.loop = THREE.LoopOnce
    }

    if (animation in Emotes) {
      setTimeout(() => {
        this.runState(States.Idle)
      }, 1000)

      setTimeout(() => {
        this.runState(States.Run)
      }, 2000)
    }
  }

  private loadNewMovement(name: string, duration: number) {
    previousAction = activeAction
    activeAction = actions[name]

    if (previousAction !== activeAction) {
      previousAction.fadeOut(duration)
    }

    this.checkActionHasLoop(activeAction, name)
    activeAction.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(duration).play()
  }

  private configureExpressions() {
    const face = this.model.getObjectByName('Head_4') as THREE.Mesh

    if (face.morphTargetInfluences) {
      face.morphTargetInfluences[0] = 0.5
      face.morphTargetInfluences[1] = 1
    }
  }
}
