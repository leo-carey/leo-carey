import { Ref } from 'vue'

export const useImagePreview = async (
  pathImages: string,
  resolvedImages: Ref<Record<string, string>, Record<string, string>>
) => {
  let images

  switch (pathImages) {
    case 'techs': {
      images = import.meta.glob('@/assets/techs/*.png') as Record<
        string,
        () => Promise<{ default: string }>
      >
      break
    }

    case 'brands': {
      images = import.meta.glob('@/assets/brands/*.png') as Record<
        string,
        () => Promise<{ default: string }>
      >
      break
    }

    case 'services': {
      images = import.meta.glob('@/assets/services/*.png') as Record<
        string,
        () => Promise<{ default: string }>
      >
      break
    }
  }

  for (const path in images) {
    const moduleImage = await images[path]()
    resolvedImages.value[path.split('/').pop() as string] = moduleImage.default
  }
}
